import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/joy";
// https://fonts.google.com/icons
import PeopleOutline from "@mui/icons-material/PeopleOutline"
import { useState } from "react";
import { useTranslation} from 'react-i18next'

export default function AssistantItem(props:any){
    const { t } = useTranslation()
    const [index,setIndex] = useState<number | null>(0);
    return(
      <Accordion         
      expanded={index === 0}
      onChange={(event, expanded) => {
        setIndex(expanded ? 0 : null);
      }}
        sx={{height:"auto"}} 
      >
        <AccordionSummary sx={{height:"auto"}}>
            <PeopleOutline/>
            <Typography fontSize="14px">
                {t("list.assisants")}
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{height:"auto"}}>
            对话 Excel表 教师助手
        </AccordionDetails>
      </Accordion>
    )
}