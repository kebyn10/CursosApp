import { useEffect } from "react";
import { useState } from "react";
import { dataDBYOUTUBE } from "../dbCourse/data";
import {
  Box,
  Button,
  Paper,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AccordionUsage from "../components/Acoordion";
import jsI from "../assets/jsIMage.png";
import pyI from "../assets/pyImage.png";
import java from "../assets/javaIMage.png";

const VideoPage = ({ data,setSelect }) => {
  const [dataVideo, setDataVideo] = useState(data);
  const [video, setVideo] = useState("");
  const [img, setImg] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    switch (data) {
      case "JavaScript":
        setDataVideo(dataDBYOUTUBE.js);
        setVideo(dataDBYOUTUBE.js.videos[0].link);
        setImg(jsI);
        break;
      case "Python":
        setDataVideo(dataDBYOUTUBE.py);
        setVideo(dataDBYOUTUBE.py.videos[0].link);
        setImg(pyI);
        break;
      case "Java":
        setDataVideo(dataDBYOUTUBE.java);
        setVideo(dataDBYOUTUBE.java.videos[0].link);
        setImg(java);

        break;

      default:
        break;
    }
  }, [data, dataVideo]);

  useEffect(() => {
    if (dataVideo?.videos) {
      const len = dataVideo?.videos?.length;
      if (len) {
        if (video == dataVideo?.videos[len - 1]?.link) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      }
    }
  }, [video]);
 return  (
    <Box
      data-aos="fade-down"
      data-aos-duration="1000"
      sx={{ width: "100%", height: "60%", marginTop: "70px", padding: "10px" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "#094460", marginBottom: "10px" }}
        >
          {dataVideo.name}{" "}
        </Typography>
        <Button
          disabled={disabled}
          variant="contained"
          sx={{ borderRadius: "30px", background: "#094460" }}
          onClick={() => {
            setSelect("test");
          }}
        >
          Tomar examen
        </Button>
      </Box>
      <Box
        sx={{
          border: "1px  ",
          height: "90vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <iframe 
              width="90%"
              height="70%"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: "20px" }}
            ></iframe>
            <Box
              sx={{
                width: "100%",
                height: "30%",
                padding: "10px",
                marginTop: "5px",
                overflowY: "auto",
              }}
            >
              <AccordionUsage
                text={
                  "⚠️ Aviso de derechos de autor:\n\n" +
                  "Todo el contenido mostrado en esta plataforma pertenece a sus respectivos creadores y está alojado en YouTube.\n" +
                  "Yo no soy el autor de estos videos ni reclamo propiedad sobre ellos.\n\n" +
                  "Este sitio tiene fines educativos y sirve como un recopilador de contenido público de YouTube para facilitar el aprendizaje.\n\n" +
                  "Si eres el propietario de algún contenido y deseas que se retire, por favor contáctame y se eliminará inmediatamente.\n\n" +
                  "Gracias por tu comprensión y apoyo al conocimiento libre. 📚"
                }
                title={"Derechos de Autor"}
              />
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Escribe tus apuntes..."
                style={{
                  width: "100%",
                  height: "15%",
                  marginTop: "10px",
                  borderRadius: "5px",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              padding: "15px",
              overflow: "auto",
            }}
            elevation={3}
          >
            {dataVideo?.videos?.length > 0
              ? dataVideo.videos.map((data, i) => (
                  <Box
                    sx={{
                      width: "100%",
                      height: "110px",
                      display: "flex",
                      background: data.link == video ? "#f7f7f7" : "white",
                      padding: "3px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    key={"video" + i}
                    onClick={() => setVideo(data.link)}
                  >
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: "30%",
                        height: "80%",
                        borderRadius: "10px",
                        marginRight: "5px",
                        marginTop: "10px",
                        marginLeft: "2px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          marginTop: "5px",
                          width: "100%",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        {data.name}
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: "5px",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        {data.description}
                      </Typography>
                    </Box>
                  </Box>
                ))
              : null}
          </Paper>
        </Box>
      </Box>
    </Box>
  ) 
  
 
  
};

export default VideoPage;
