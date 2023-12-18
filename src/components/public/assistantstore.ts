import {create} from 'zustand'
import { System } from './system'


interface AssisantsStore{
    Assistants:System.Assistants,
    // 从文件读取
    InsertAssistantBase: (assistant:System.AssistantBase)=>void,
    // 读取消息
    LoadMessages:(AssistantID:string)=>void,
    // 读取附加问件
    LoadCloudFiles:(AssistantID:string)=>void,
    // 读取Function
    LoadFunction:(AssistantID:string)=>void,
}

const AssisantsData =  new Map<string,System.Assistant>

export const AssistantsStore = create<AssisantsStore>()((get,set) =>({
    Assistants: AssisantsData,

    InsertAssistantBase: (assistant)=>{
        const base:System.AssistantBase = assistant
        const Assistant:System.Assistant ={
            AssistantBase:base,
            AssistantData:{
                AssistantID:base.LocalID as string,
                Messages:[],
                CloudFiles:[]
            },
        }
        AssisantsData.set(assistant.LocalID as string,Assistant)
        console.log(assistant)
    },

    LoadMessages:(assistantid)=>{

    },

    LoadCloudFiles:(assistantid)=>{

    },

    LoadFunction:(assistantid)=>{

    },

}))




// export const insertMessage = (id:string,msg:System.Message) => useAssistentsStore.setState(
//         (state) => {
//             state.Assisants.get(id)?.AssistantData.Messages.push(msg)
//             return {Assisants:state.Assisants}
//         }

//     )

// export const getlastMessage= (id:string,msg:System.Message) => useAssistentsStore.getState(
//     (state) => {
        
//     }
// )
// const useAssistantsState = create<AssisantsState>((get,set)=>({
//     Assisants:Assistents,
//     AddMessage:(AssistantID:string,Message:System.Message)=>
//         set((AssisantsState)=>{
//                 AssisantsState.Assisants.get(AssistantID)?.Messages.push(Message)
//                 return AssisantsState
//             }
//         )
    
// }))
