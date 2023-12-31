import { app, BrowserWindow, shell, ipcMain } from 'electron'
import { release } from 'node:os'
import { join } from 'node:path'
import { update } from './update'
// import { updateElectronApp,UpdateSourceType} from 'update-electron-app'
import  log from 'electron-log/main'
import {message} from './message'
import * as fs from 'fs';
import { AssistantsLoad } from './assistantsload'

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';


log.info(`version:${app.getVersion()}`)

// windows install 
if (require('electron-squirrel-startup')) app.quit();
// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
log.initialize({ preload: true });
log.info('Log from the main process');




process.env.DIST_ELECTRON = join(__dirname, '../')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, '../public')
  : process.env.DIST

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win: BrowserWindow | null = null
// preload预加载可远程执行,可用于Function热更新
const preload = join(__dirname, '../preload/index.js')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')


const resourcesPath = process.env.VSCODE_DEBUG ? join(process.env.PWD as string,'extraResources') : process.resourcesPath
// 读取资源文件,暂未使用
const tempjson=join(resourcesPath as string,'tmp.json')
try {
   const tempstr = fs.readFileSync(tempjson,'utf-8')
   log.info(tempstr)
  
} catch (error) {
  log.info(error)
}
// 读取Assistants
const assistantlist = AssistantsLoad(resourcesPath)



// 以下代码处理自动更新
// try {
//   updateElectronApp({
//     updateInterval: '5 minutes',//'1 hour',
//     logger: log
//   });
// } catch(error) {
//   log.info(`updateElectronApp fild[${error}]`);
// }

async function createWindow() {

  win = new BrowserWindow({
    title: 'Main window',
    icon: join(process.env.VITE_PUBLIC, 'favicon.ico'),
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false,
    },
    minWidth:600,
    minHeight:500,
  })
  win.setBackgroundColor('#171A1C'); // 设置背景色为JoyUI dark样式
  

  if (url) { // electron-vite-vue#298
    win.loadURL(url)
    // Open devTool if the app is not packaged
    win.webContents.openDevTools()
  } else {
    win.loadFile(indexHtml)
  }

  

  // Test actively push message to the Electron-Renderer
  win.webContents.once('did-finish-load', () => {
    // 完成渲染后发送消息显示版本
    win?.webContents.send('main-msg-version', {version:app.getVersion()})
    console.log('send assistant-list')
    win?.webContents.send('assistant-list', assistantlist)
   
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })





  /*
    使用第三方的自动更新 electron-updater
    当前问题
    1. forge 发布到github,编译时无法生成 latest.yml
    2. forge github 发布必须配合官方支持的autoUpdate
    3. 若使用官方autoUpdate 必须要有代码签名
    4. 使用三方的electron-updater macos同意需要代码签名

    & 后期方法,使用签名,github发布,使用官方的autoUpdate
    ! 当前关闭自动更新 update(win)
  */

  // update(win)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// 主进程发送消息测试
message()
// 发送助手信息消息


// New window example arg: new windows url
ipcMain.handle('open-win', (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`)
  } else {
    childWindow.loadFile(indexHtml, { hash: arg })
  }
})

