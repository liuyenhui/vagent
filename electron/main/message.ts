import {ipcMain ,app} from 'electron'


export  function message(){
    ipcMain.on('msg1', (ev, data) => {
        console.info(data)
        console.info(app.getVersion())
        // 发送消息给渲染进程
        ev.sender.send('msg1Re', '这是一条来自主进程的反馈消息')
    })
} 


