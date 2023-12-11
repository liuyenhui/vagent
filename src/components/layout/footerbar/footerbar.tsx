import { Card, Link, Stack, Typography } from '@mui/joy';
import Box from '@mui/joy/Box';
import AttachMoney from '@mui/icons-material/AttachMoney';
import { useTranslation, Trans, Translation } from 'react-i18next'

export default function FooterBar(){
    const { t } = useTranslation()

    return(
        <Box sx={{width:1,height:"30px"}}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ml:3}}
        
            >
                <Typography fontSize="12px" sx={{mr:1}}>
                    <Link href=''>{t('todos.allCompleted')}</Link>
                </Typography>
                <AttachMoney sx={{fontSize:"16px"}}/>
                <Typography fontSize="12px">
                    18.32 
                </Typography>
            </Stack>
        </Box>
    )
}