import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor="red" flex={2} p={2} /*Breakpoint*/sx={{display:{xs:"none",sm:"block"}}}>
        Rightbar
    </Box>
  )
}

export default Rightbar