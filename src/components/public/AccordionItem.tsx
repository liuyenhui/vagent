import { Accordion, AccordionDetails, AccordionSummary } from "@mui/joy";

export default function AssistantItem(props:any){
    return(
      <Accordion sx={{height:"auto"}} >
        <AccordionSummary sx={{height:"auto"}}>
            {props.title}
        </AccordionSummary>
        <AccordionDetails sx={{height:"auto"}}>
            {props.children}
        </AccordionDetails>
      </Accordion>
    )
  }