import {  AccordionGroup, Box, Sheet } from '@mui/joy';
import AccordionItem from '@/components/public/AccordionItem'; 
import AssistantItem from './assistants/assistants';
import Files from './files/files';
import Images from './images/images';

import { LEFT_CONTENT_HEIGHT } from '@/components/public/constants';
export default function ListView(){
    const detail = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.`
    console.log(LEFT_CONTENT_HEIGHT)
    return(
       <Sheet variant="outlined" 
          sx={{width:"auto", height: LEFT_CONTENT_HEIGHT,mt:"7px", overflow:"auto"}} 
       >
          <AccordionGroup>
            <AssistantItem></AssistantItem>
            <Images></Images>
            <Files></Files>

            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>
            <AssistantItem></AssistantItem>


          </AccordionGroup>
      </Sheet>
    )
}