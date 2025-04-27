import { Box } from '@mui/material'
import React from 'react'

export const NavBar = () => {
  return (
    <Box sx={{width:"100%", height:"70px", backgroundColor:"transparent", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 20px",position:"absolute", top:"0", left:"0", zIndex:"10"}}>
      <Box sx={{color:"white", fontSize:"24px"}}>CodeTube</Box>
      <Box sx={{display:"flex", gap:"20px"}}>
        <Box sx={{color:"white", cursor:"pointer"}}>Home</Box>
        <Box sx={{color:"white", cursor:"pointer"}}>About</Box>
        <Box sx={{color:"white", cursor:"pointer"}}>Contact</Box>
      </Box>

    </Box>
  )
}
