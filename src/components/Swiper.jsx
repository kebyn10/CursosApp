import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import { Box, Button, Typography } from "@mui/material";
// import py from "../assets/pyImage.png"
// import java from "../assets/javaIMage.png"

function ImageSlider() {
  const data=[{id:"Imagen 1",img:img1},{id:"Imagen 2",img:img2},{id:"Imagen 3",img:img3},{id:"Imagen 4",img:img4},{id:"Imagen 5",img:img5}]
  return (
    <Box sx={{ width: "100%" }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        style={{ width: "100%", height: "70vh" }}
      >
      
        {
          data.map((item)=>(
            <SwiperSlide style={{ height: "70vh" }} key={item.id}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(#0646638d, #0969968d)",
                zIndex: 1, // Asegura que el gradiente esté sobre la imagen
                borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px" 
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "left",
                  padding: "30px",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "45px",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  Fortalece tus conocimientos en{" "}
                  <span style={{ color: "#96c6dc" }}>CodeTube</span>
                </Typography>
  
                <Typography sx={{ color: "white", fontSize: "20px", mb: 1 }}>
                  Encuentra tus cursos favoritos de YouTube sin distracciones.
                </Typography>
                <Typography sx={{ color: "white", fontSize: "20px", mb: 3 }}>
                  Pruebas que desafían tus conocimientos aprendidos. ¿Qué esperas
                  para empezar a aprender?
                </Typography>
                
                <Box>
                <Button variant="contained" sx={{color:"white",background:"#0969968d",borderRadius:"30px",fontWeight:"bold"}}>Empezar a estudiar</Button>
                </Box>
              </Box>
            </Box>
            <img
              src={item.img}
              alt={item.id}
              style={{ width: "100%", height: "100%", objectFit: "cover",borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px" }}
            />
          </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  );
}

export default ImageSlider;
