import React from 'react'
import ImageSlider from '../components/Swiper'
import { NavBar } from '../components/NavBar'
import { Box } from '@mui/material'
import { AboutUs } from '../components/AboutUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
   <Box data-aos="fade-down" data-aos-duration="1000" >
    <NavBar page={"home"}/>
   <ImageSlider/>
   
   <Box sx={{width:"100%"}}>
   <AboutUs />
   </Box>
   <Footer />
   </Box>
   </>
  )
}

export default Home