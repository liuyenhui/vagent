import {create} from 'zustand'
import { System } from './system'

const InfoData:System.Info = {
    Email:"liuyenhui@gamil.com",
    OpenAiToken:"",
    AppVersion:"",
    Name:"liuhui",
    EndPoint:"",
    Language:"en"
}

interface SystemInfoStoreType {
    info:System.Info,
    update:(name:string,value:string | number)=>void,
}
// 通过属性名,修改属性值
export const SystemInfoStore = create<SystemInfoStoreType>()((set)=>({
    info:InfoData,
    update:async (name,value) => set((state) => {
        // InfoData[name] = value 以下代码 [name]:value 替代
        return {
            // info:InfoData 无效    展开的目的是复制Info 触发改变
            info:{
                ...InfoData,
                [name]:value
            }
        }
    }),
}))





// 测试 email,以下代码未使用
interface SystemEmailType{
    Emal:string
    updateEmail:(Email:string)=>{}
}

export const SystemEmailStore = create<SystemEmailType>()((set)=>({
    Emal:"liuyenhui@sina.com",
    updateEmail:async (Email:string) => set((state) => ({ Emal: Email }))
}))



