import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/joy"
import iconfile from "@/assets/chatgpt.png"
import i18n from 'i18next'

export default function HeadView(){
    return (
        // <Box sx={{height:"auto",width:1,backgroundColor:"darkblue"}}>
            <Card sx={{height:"auto",m:0,p:"2px"}} orientation="horizontal" >
                <Avatar alt="Remy Sharp" sx={{m:1}} src={iconfile} />
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{m:0}}
                >
                    <Button
                        color="neutral"
                        onClick={function(){
                            i18n.changeLanguage('en');
                        }}
                        size="sm"
                        variant="outlined"
                        sx={{mb:"3px" }}
                    >
                        {/* <Typography  fontSize="18px"> */}
                            GPT 3.5
                        {/* </Typography> */}
                    </Button>
                    {/* <Typography fontSize="12px">
                        Open AI 
                    </Typography> */}
                    <Typography fontSize="12px">
                        API Version:1.0.4
                    </Typography>
                </Stack>
            </Card>
        // </Box>
    )
}