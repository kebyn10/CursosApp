import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NavBar = ({page}) => {
  const navigate = useNavigate();
  return (
    <Box sx={{width:"100%", height:"70px", backgroundColor:page!="home" ? "#094460" : "transparent", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 20px",position:"absolute", top:"0", left:"0", zIndex:"10"}}>
      <Box sx={{color:"white", fontSize:"24px"}}>CodeTube</Box>
      
      {
        page!="home" ? ( 
          <Box sx={{color:"white", cursor:"pointer"}} onClick={()=>navigate('/', { state: { from: 'home' } })}>inicio</Box>
        ) : null
      }
        

    </Box>
  )
}
