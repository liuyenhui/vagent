import { Box, Sheet, Stack } from "@mui/joy";
import ChatInput from "./chatinput/chatinput";
import MessagesPane from "./message/MessagesPane";
import MyProfile from "./message/MyMessages"
import React from "react";
import { ChatProps } from "./message/types";
import { chats } from './message/data';

export default function Right(){
    const [selectedChat, setSelectedChat] = React.useState<ChatProps>(chats[0]);


    return(
    <Box sx={{width:1}}>
        <Sheet
            sx={{
            height:1,    
            flex: 1,
            backgroundColor:"red",
            width: '100%',
            mx: 'auto',
            pt: { xs: 'var(--Header-height)', sm: 0 },
            gridTemplateColumns: {
                xs: '1fr',
                sm: 'minmax(min-content, min(30%, 400px)) 1fr',
            },
            }}
        >
            <MessagesPane  chat={selectedChat}></MessagesPane>
        </Sheet>
    </Box>
        
    )
}