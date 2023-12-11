import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/joy";
// https://fonts.google.com/icons
import Panorama from "@mui/icons-material/Panorama"
export default function Images(props:any){
    return(
      <Accordion sx={{height:"auto"}} >
        <AccordionSummary sx={{height:"auto"}}>
            <Panorama/>
            <Typography fontSize="14px">
                Images
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:"auto"}}>
            对话 Excel表 教师助手
        </AccordionDetails>
      </Accordion>
    )
}