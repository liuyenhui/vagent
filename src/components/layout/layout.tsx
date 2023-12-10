import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import { Stack } from '@mui/joy';
import FooterBar from '@/components/footerbar/footerbar'
import Content from '@/components/content/content';

export default function Layout() {
  return (
    <Box sx={{ width: 1 , backgroundColor:"royalblue"}} display="grid" >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Content/>
        <FooterBar/>
      </Stack>
    </Box>
  );
}