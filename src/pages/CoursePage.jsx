import  { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Box } from '@mui/material'
import { SelectCourse } from './SelectCourse'
import VideoPage from './VideoPage'
import SelectCourseTest from './SelectCourseTest'

const CoursePage = () => {
    const [course,setCourse]=useState("")
   
  return (
    <Box sx={{width:"100%", height:"100vh"}}>  
       <NavBar page={"cursos"}/>


        {
            course==="" ? (<SelectCourse setCourse={(e)=>{setCourse(e)}}/>) : (<SelectCourseTest data={course}/>)
        }
       
    
       </Box>
  )
}

export default CoursePage