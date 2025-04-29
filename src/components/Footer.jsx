import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ width: "100%", height: "100px", backgroundColor: "#094460", display: "flex", marginTop: "50px",color:"white",padding:"20px",flexDirection:"",justifyContent:"space-evenly",alignItems:"end"}}>   
    <Typography>© 2025 CodeTube</Typography> 
    <Typography variant='h6'>CodeTube</Typography> 
    <Typography>© 2025 YouTube</Typography>  

    </Box>
  )
}

export default Footer