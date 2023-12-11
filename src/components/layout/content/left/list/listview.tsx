import {  AccordionGroup, Box } from '@mui/joy';
import AccordionItem from '@/components/public/AccordionItem'; 
import AssistantItem from './assistant/assistant';
import Files from './files/files';
import Images from './images/images';
export default function ListView(){
    const detail = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.`
    return(
       <Box sx={{width:1,height:"auto", overflow:"auto"}} display="flex" >
          <AccordionGroup>
            <AssistantItem></AssistantItem>
            <Images></Images>
            <Files></Files>

          </AccordionGroup>
      </Box>
    )
}