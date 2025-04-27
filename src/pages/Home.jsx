import React from 'react'
import ImageSlider from '../components/Swiper'
import { NavBar } from '../components/NavBar'
import { Box } from '@mui/material'
import { AboutUs } from '../components/AboutUs'

const Home = () => {
  return (
   <>
   <NavBar/>
   <ImageSlider/>
   <Box sx={{width:"100%"}}>
   <AboutUs />
   </Box>
   </>
  )
}

export default Home