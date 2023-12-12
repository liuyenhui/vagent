import { Box } from "@mui/joy";
import MessageInput from "./messageinput/MessageInput"

export default function ChatInput(){
    return (
        <Box sx={{whidth:1}}>
            <MessageInput textAreaValue='' onSubmit={()=>{}} setTextAreaValue={()=>{}}>
            </MessageInput>
        </Box>
    )
}