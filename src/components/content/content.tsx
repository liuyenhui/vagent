import Box from '@mui/joy/Box';
import { Stack } from '@mui/joy';
export default function Content(){
    return (
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        >
          <Box sx={{width:"300px", backgroundColor:"red"}}>
          </Box>
          <Box sx={{width:1, backgroundColor:'orange'}}>
          </Box>
        </Stack>
    )
}