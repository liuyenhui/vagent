import { Card, Link, Stack, Typography } from '@mui/joy';
import Box from '@mui/joy/Box';
import Balance from './balance/balance';
import Language from './language/language';

export default function FooterBar(){
    

    return(
        <Box sx={{width:1,height:"35px"}}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ml:3}}
        
            >
                <Balance/>
                <Language/>
                
            </Stack>
        </Box>
    )
}