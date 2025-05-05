import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Box, Typography } from '@mui/material'
import imge from "../assets/programin2.png"
import jsI from "../assets/jsIMage.png"
import pyI from "../assets/pyImage.png"
import java from "../assets/javaIMage.png"


export const SelectCourse = ({setCourse}) => {
     const data=[
            {id:"JavaScript",img:jsI},
            {id:"Python",img:pyI},
            {id:"Java",img:java},
        ]
  return (
    <Box sx={{width:"100%", height:"60%"}}>   
        <Box sx={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"end"}}>   
            <Box data-aos="fade-up" data-aos-duration="1000"    sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>   
                <img style={{width:"22%"}} src={imge} alt="someone programing" />
                <Typography sx={{fontSize:"35px",color:"#094460"}}>¡Qué esperas para empezar!</Typography>
            </Box>

        </Box>



        <Box sx={{width:"100%",background:"",height:"100%",padding:"20px"}}>
            <Box sx={{width:"100%",height:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px"}}>
                {
                    data.map((data,i)=>(
                        <Box sx={{width:"33%"}} key={data.id+""+i}>  


                        <Typography sx={{fontSize:"20px",color:"#094460",fontWeight:"bold",marginBottom:"10px",cursor:"pointer","&:hover":{
                            color:"#0969968d"
                        }}} onClick={()=>setCourse(data.id)} >{data.id}</Typography>
                        <Box >
                            <img src={data.img} alt="" onClick={()=>setCourse(data.id)} style={{width:"70%",borderRadius:"20px",cursor:"pointer"}} />
                        </Box>
                    </Box>
                    ))
                }
               
            </Box>
        </Box>



       </Box>
  )
}
