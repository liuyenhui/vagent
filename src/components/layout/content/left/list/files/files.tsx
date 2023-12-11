import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/joy";
// https://fonts.google.com/icons
import FileOpen from "@mui/icons-material/FileOpen"
export default function Files(props:any){
    return(
      <Accordion sx={{height:"auto"}} >
        <AccordionSummary sx={{height:"auto"}}>
            <FileOpen/>
            <Typography fontSize="14px">
                Files
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:"auto"}}>
            对话 Excel表 教师助手
        </AccordionDetails>
      </Accordion>
    )
}