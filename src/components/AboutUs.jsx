import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export const AboutUs = () => {
  return (
    <Box sx={{ width: "100%", marginBottom: "40px" }}>
      <Box sx={{ width: "100%", padding: "0px 90px" }}>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "50px",
            color: "#094460",
          }}
        >
          ¿Quiénes somos?
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            marginTop: "20px",
            color: "#094460",
            padding: "0 40px",
          }}
        >
          En CodeTube, nuestro objetivo es brindarte una experiencia de
          aprendizaje sencilla y eficiente. Somos una plataforma dedicada a
          ofrecerte los mejores tutoriales y cursos de YouTube, cuidadosamente
          seleccionados y organizados para que puedas mejorar tus conocimientos
          sin distracciones. Sabemos lo importante que es contar con recursos
          educativos de calidad. Por eso,
          trabajamos para que puedas acceder fácilmente a los videos más
          relevantes para tu formación, desde temas básicos hasta los más
          avanzados. Nuestro compromiso es ayudarte a fortalecer tus habilidades
          y llevar tu aprendizaje al siguiente nivel.
        </Typography>
      </Box>

      <Box sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
          <Box sx={{width:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <Paper elevation={3} sx={{width:"300px",height:"250px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px",flexDirection:"column",padding:"20px"}}>    
 <Typography sx={{fontSize:"25px",fontWeight:"bold",color:"#094460"}}>
                Misión
            </Typography>
            <Typography sx={{width:"300px",textAlign:"center",padding:"10px"}}>
            Facilitar el acceso a contenido educativo de calidad, organizado de manera eficiente, para que los estudiantes puedan aprender y crecer sin distracciones.
            </Typography>
            </Paper>
           
          </Box>
          <Box sx={{width:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <Paper elevation={3} sx={{width:"300px",height:"250px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px",flexDirection:"column",padding:"20px"}}>    
 <Typography sx={{fontSize:"25px",fontWeight:"bold",color:"#094460"}}>
 Visión
            </Typography>
            <Typography sx={{width:"300px",textAlign:"center",padding:"10px"}}>
            Ser la plataforma líder en videos tutoriales educativos, contribuyendo al desarrollo de habilidades y conocimientos esenciales para el futuro académico de los estudiantes.
            </Typography>
            </Paper>
           
          </Box>
      </Box>
    </Box>
  );
};
