import { useState } from 'react'
import UpdateElectron from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
import './App.css'
import { ipcRenderer } from 'electron'
import { message } from 'electron/main/message'


console.log(window.api.version())

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)



ipcRenderer.on('asynchronous-message', function (evt, message) {
  
  console.log(message); // Returns: {'SAVED': 'File Saved'}
});

function App() {
  const [count, setCount] = useState(0)
  const [version,setVersion] = useState('')
  // 接收主进程的版本消息
  ipcRenderer.on('main-msg-version',(evt,message)=>{
    setVersion(message.version)
  })
  return (
    <div className='App'>
      <div className='logo-box'>
        <a href='https://github.com/liuyenhui/vagent' target='_blank'>
          <img src={logoVite} className='logo vite' alt='Electron + Vite logo' />
          <img src={logoElectron} className='logo electron' alt='Electron + Vite logo' />
        </a>
      </div>
      <h1>Open AI Agent {version}</h1>
      <div className='card'>
        <button onClick={() => setCount((count) =>{ 
            // 发送消息到主进程
            ipcRenderer.send('msg1', '这是一条来自于Renderer的消息')
            return count + 1
          })}>
          count is {count}
        </button>
        <p>
          Edit <code>npm install</code> and save to test agent
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Open AI logo to learn more
      </p>
      <div className='flex-center'>
        Place static files into the<code>/public</code> folder <img style={{ width: '5em' }} src='./node.svg' alt='Node logo' />
      </div>
      <UpdateElectron />
    </div>
  )
}

export default App