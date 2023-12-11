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

function App() {
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