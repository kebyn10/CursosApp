import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Box, Typography } from '@mui/material'
import imge from "../assets/programin.png"
import jsI from "../assets/jsIMage.png"
import pyI from "../assets/pyImage.png"
import java from "../assets/javaIMage.png"
import { SelectCourse } from './SelectCourse'
import VideoPage from './VideoPage'

const CoursePage = () => {
    const [course,setCourse]=useState("")
   
  return (
    <Box sx={{width:"100%", height:"100vh"}}>  
       <NavBar page={"cursos"}/>


        {
            course==="" ? (<SelectCourse setCourse={(e)=>{setCourse(e)}}/>) : (<VideoPage data={course}/>)
        }
       
    
       </Box>
  )
}

export default CoursePage