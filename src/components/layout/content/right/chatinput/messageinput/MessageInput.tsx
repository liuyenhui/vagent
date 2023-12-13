import { Check, FormatBold, FormatItalic,Send} from "@mui/icons-material";
import { Box, Button, Chip, IconButton, ListItemDecorator, Menu, MenuItem, Stack, Textarea, Typography } from "@mui/joy";
import React from "react";
import { useTranslation} from 'react-i18next'


export default function MessageInput(){
  const { t } = useTranslation()
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
      <Textarea
        placeholder="Type something here…"
        minRows={5}
        maxRows={5}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
              alignItems:'auto',
              justifyContent:'center',
            }}
          >
            <Typography level="body-sm" variant="plain" color="primary" mt="5px">
            {t("chat.sendfiles")}
            </Typography>
            <Chip variant="plain" color="primary" size="sm" sx={{height:"auto",mb:"5px", ml: 'auto' }} onClick={()=>{}}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
              >
                <Send sx={{mr:"1px"}}/>
                <Typography level="body-sm" variant="plain" color="primary">
                  {t("chat.sendmessage")}
                </Typography>
                
                
              </Stack>
            </Chip>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
  );
}

 function MessageInput1(){
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <Textarea
        placeholder="Type something here…"
        minRows={3}
        maxRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              p:0,
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <Chip variant="plain" size="sm" color="neutral">

             Files
            {/* <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => {
                console.log(event)
              }}
            > */}
              
              
            {/* </IconButton> */}
            </Chip>
        
            <Chip variant="plain" size="sm" sx={{ ml: 'auto' }} onClick={()=>{}}>
              Send Message
            </Chip>
            {/* <Button sx={{ ml: 'auto' }}>Send</Button> */}
          </Box>
        }
        sx={{
          width:"100%",
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
  )
}