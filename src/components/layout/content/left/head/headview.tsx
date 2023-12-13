import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/joy"
import iconfile from "@/assets/chatgpt.png"
import i18n from 'i18next'
import { LEFT_HEAD_HEIGHT } from "@/components/public/constants"

export default function HeadView(){
    return (
        <Box height={LEFT_HEAD_HEIGHT}>
            <Card sx={{mt:"2px",p:0}} orientation="horizontal">
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
                            // i18n.changeLanguage('en');
                            console.log("gpt click!")
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
        </Box>
    )
}