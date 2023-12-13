import { Box, Stack, Table } from "@mui/joy";
import HeadView from "./head/headview";
import ListView from "./list/listview"
import { LEFT_WIDTH } from "@/components/public/constants";
import { useState } from "react";
export default function Left(){
    const [ml,setMl] = useState("0px")
    // setTimeout(() => {
    //     setMl(`-${LEFT_WIDTH}px`);

    // }, 3000);
    return(
        <Box minWidth={LEFT_WIDTH} width={LEFT_WIDTH} sx={{
            marginLeft:ml,
            transition:"marginLeft 0.5s",
            overflowY:"hidden"
            
        }}>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                sx={{width:1,}}
                // spacing={2}
            >
                <HeadView/>
                <ListView/>
            </Stack>
              
        </Box>
    )
}