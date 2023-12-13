import { Box, Sheet, Stack, Textarea } from "@mui/joy";
import { RIGHT_INPUT_HEIGHT } from "@/components/public/constants";
import MessageInput from "./messageinput/messageinput";
export default function ChatInput(){
    return (
        
        <Sheet variant="soft" sx={{width:"100%", height:RIGHT_INPUT_HEIGHT}}>
            <MessageInput >
            </MessageInput>
        </Sheet>
        
    )
}