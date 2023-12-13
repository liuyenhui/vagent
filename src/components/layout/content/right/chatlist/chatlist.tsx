import { Height } from "@mui/icons-material";
import { Box, Stack } from "@mui/joy";
import { RIGHT_LIST_HEIGHT,RIGHT_LIST_BOTTOM } from "@/components/public/constants";
import MessagePan from "./messagepan/messagepan";
export default function ChatList(){
    return (
        <Stack 
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
            height={RIGHT_LIST_HEIGHT}

            // 固定块暂未使用 position="absolute"
            bottom={RIGHT_LIST_BOTTOM}
            width="calc(100% - 3px)"
            // ?? bug 2023.12.13 缩小窗口 消息应跟随滚动到最下方
            
            sx={{
                
                overflow:"scroll",
                pb:"0px",
                
            }}
        >
            
                ok1
                <br/>
                ok2
                <br/>
                ok3
                <br/>
                ok4
                <br/>
                ok5
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok<br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok
                <br/>
                ok-100
                {/* <MessagePan>Hello Word1</MessagePan> */}
             
            
            {/* <MessagePan>Hello Word2</MessagePan>
            <MessagePan>Hello Word3</MessagePan>
            <MessagePan>Hello Word4</MessagePan> */}
        </Stack>
    )
}