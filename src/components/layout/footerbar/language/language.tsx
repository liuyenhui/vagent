import { Box, Chip, Select } from "@mui/joy";
import Option from '@mui/joy/Option';
import { defaultLanguage } from "@/i18n/i18n";
import { Height, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import i18n from 'i18next'



export default function Language(){ 
    return (
        <Box sx={{m:0}}>
            <Select
                variant="soft"
                defaultValue="zh"
                indicator={<KeyboardArrowUp/>}
                size="sm"
                sx={{
                    m:"auto",
                    fontSize:"12px"
                }}
                onChange={(event,value)=>{
                     value?i18n.changeLanguage(value):null
                }}
            >
                <Option value="en" sx={{
                    m:"1px",
                    fontSize:"12px"
                }}>English</Option>
                <Option value="zh"sx={{
                    m:"1px",
                    fontSize:"12px"
                }}>简体中文</Option>
            </Select>
        </Box>
    )
}