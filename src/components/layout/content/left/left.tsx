import { Box, Stack } from "@mui/joy";
import HeadView from "./head/headview";
import ListView from "./list/listview"

export default function Left(){
    return(
        <Box sx={{width:"300px",maxWidth:"300px", backgroundColor:"red"}}>
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