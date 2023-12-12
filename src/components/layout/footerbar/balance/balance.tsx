import AttachMoney from '@mui/icons-material/AttachMoney';
import { Box, Link, Stack, Typography } from '@mui/joy';
import { useTranslation} from 'react-i18next'

export default function Balance(){
    const { t } = useTranslation()
    return(
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
        >   

            <Typography fontSize="12px" sx={{ mr: 1 }}>
                <Link href=''>{t('footer.balance')}</Link>
            </Typography>
            <AttachMoney sx={{ fontSize: "16px" }} />
            <Typography fontSize="12px">
                    18.32
            </Typography>
        </Stack>
    )
}