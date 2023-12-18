import { Box, Sheet } from "@mui/joy";
// <Sheet variant="plain" color="neutral" sx={{ height:1,p: 4 }}>
// {children}
// </Sheet>
export default function MessagePan(props:{msg:string|undefined}){
    return(
        <Box  height="auto">
            {props.msg}
        </Box>
    )
}