import path from 'node:path'
import * as fs from 'fs';
import yaml from 'js-yaml'
import { System } from '@/components/public/system';
import  log from 'electron-log/main'

// import {AssistantsStore}  from '../../src/components/public/assistantstore';

// const InsertAssistantBase = AssistantsStore((state)=>state.InsertAssistantBase)



export function AssistantsLoad(respath:string):Array<unknown>{
    const assistantlist:Array<unknown> = []
    const loadpath = path.join(respath,'assistants')   
    fs.readdirSync(loadpath).map((file) => {
        try {
            const filepath = path.join(loadpath, file)
            if (path.extname(filepath).toLowerCase() ==='.yml'){
                const assistant = yaml.load(fs.readFileSync(filepath,'utf-8')) as any
                const filename = path.basename(filepath)
                // Config字段是助手基本信息
                assistant.Config['FileName'] = filename
                assistantlist.push(assistant.Config)
            }
        } catch (error) {
            log.error(`load file:${file}`,error)
        }
            // InsertAssistantBase(assistant)
            // console.log(assistant)
            // console.log(assistant.Config.Prompt)
            // // 写入yml文件
            // assistant.Config.Prompt = "小红书作者"
            // // 序列化对象 info
            // let yamlStr = yaml.dump(assistant);
            // console.log(yamlStr)
            // fs.writeFileSync(filename,yamlStr,'utf-8')
    });
    return assistantlist;
}