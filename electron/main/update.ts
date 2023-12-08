import { app, ipcMain } from 'electron'
import  log from 'electron-log/main'

import {
  type ProgressInfo,
  type UpdateDownloadedEvent,
  autoUpdater
} from 'electron-updater'
import { message } from './message'

export function update(win: Electron.BrowserWindow) {

  // When set to false, the update download will be triggered through the API
  autoUpdater.autoDownload = false
  autoUpdater.disableWebInstaller = false
  autoUpdater.allowDowngrade = false
  autoUpdater.setFeedURL({
    provider: 'github',
    owner: 'liuyenhui',
    protocol: 'https',
    repo: 'vagent',
  });
  // start check
  autoUpdater.on('checking-for-update', function () { 
    log.info('checking-for-update...')
  })
  // 有新版本
  autoUpdater.on('update-available', (arg) => {
    log.info('update-available')
    win.webContents.send('update-can-available', { update: true, version: app.getVersion(), newVersion: arg?.version })
  })
  // 没有新版本
  autoUpdater.on('update-not-available', (arg) => {
    log.info('update-not-available');
    win.webContents.send('update-can-available', { update: false, version: app.getVersion(), newVersion: arg?.version })
  })
  
  // console.log('checkForUpdatesAndNotify...')
  // autoUpdater.checkForUpdatesAndNotify().then((result)=>{
  //   console.log(result)
  // }).catch((error)=>{
  //   console.log(error);
  // })

  // Checking for updates
  ipcMain.handle('check-update', async () => {
    if (!app.isPackaged) {
      const error = new Error('The update feature is only available after the package.')
      log.error(error.message);
      return { message: error.message, error }
    }

    try {
      return await autoUpdater.checkForUpdatesAndNotify()
    } catch (error) {
      log.error('Network error:')
      log.error(error)
      return { message: 'Network error' }
    }
  })

  // Start downloading and feedback on progress
  ipcMain.handle('start-download', (event) => {
    startDownload(
      (error, progressInfo) => {
        if (error) {
          // feedback download error message
          event.sender.send('update-error', { message: error.message, error })
        } else {
          // feedback update progress message
          event.sender.send('download-progress', progressInfo)
        }
      },
      () => {
        // feedback update downloaded message
        event.sender.send('update-downloaded')
      }
    )
  })

  // Install now
  ipcMain.handle('quit-and-install', () => {
    log.info('quit-and-install')
    autoUpdater.quitAndInstall(false, true)
  })
}

function startDownload(
  callback: (error: Error | null, info: ProgressInfo | null) => void,
  complete: (event: UpdateDownloadedEvent) => void,
) {
  autoUpdater.on('download-progress', info => callback(null, info))
  // autoUpdater.on('error', error => callback(error, null))
  autoUpdater.on('error', error => {
    log.error('autoUpdater error:')
    log.error(error.message)
  })
  autoUpdater.on('update-downloaded', complete)
  autoUpdater.downloadUpdate()
}
