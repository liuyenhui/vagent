import { Stack } from '@mui/joy';
import Box from '@mui/joy/Box';
import Left from './left/left'
import Right from './right/right';
export default function Content(){
    return (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Left/>
          <Right/>
        </Stack>
    )
}