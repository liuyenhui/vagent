import { useState } from 'react'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
// import './App.css'
import { ipcRenderer } from 'electron'
import '@fontsource/inter';
import { Box, CssVarsProvider } from '@mui/joy'


import { message } from 'electron/main/message'
// 进程通信,proload 见:electron/preload/index.ts
console.log(window.api.version());
import Layout from './components/layout/layout'
import {SystemInfoStore } from '@/components/public/systemstore'
import {AssistantsStore } from '@/components/public/assistantstore'
import { System } from './components/public/system';


function App() {
  console.log("app load.....")
  const update = SystemInfoStore((state)=>state.update)
  const insertbase = AssistantsStore(state=>state.InsertAssistantBase)
  // 主进程推送版本

  ipcRenderer.on('main-msg-version',(evt,message)=>{ 
    console.log('recv main-msg-version')
    update("AppVersion",message.version)
  })
  // 获得助手信息
  ipcRenderer.once('assistant-list',(evt,assistantlist)=>{
      const list:Array<unknown> = assistantlist
      console.log(`recv assistant-list length:${list.length}`)
      list.forEach((assistant)=>{
      insertbase(assistant as System.AssistantBase)
      })
  })
  
  return (
    <CssVarsProvider defaultMode='dark'>
        <Box  sx={{
          bgcolor: 'background.paper',
          m:0,
          p:0,
          width:1,
          height:1
          
        }}>
          <Layout/>
        </Box>
     
    </CssVarsProvider>
  )
}
export default App;