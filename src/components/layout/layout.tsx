import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import { Stack } from '@mui/joy';
import FooterBar from '@/components/layout/footerbar/footerbar'
import Content from '@/components/layout/content/content';
import { useState } from 'react';

export default function Layout() {

  return (
      <Box sx={{ width: 1 }} display="grid" >
        <Stack
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          
        >
          <Content/>
          <FooterBar/>
        </Stack>
      </Box>
  );
}