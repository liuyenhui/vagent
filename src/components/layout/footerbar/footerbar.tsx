import { Card, Link, Sheet, Stack, Typography } from '@mui/joy';
import Box from '@mui/joy/Box';
import Balance from './balance/balance';
import Language from './language/language';
import { FOOTER_BAR_HEIGHT } from '@/components/public/constants';

export default function FooterBar(){
    

    return(
        <Sheet variant="outlined"  sx={{width:"auto",height:FOOTER_BAR_HEIGHT}}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ml:3}}

        
            >
                <Balance/>
                <Language/>
                
            </Stack>
        </Sheet>
    )
}