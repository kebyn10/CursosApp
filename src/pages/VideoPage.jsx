import { use, useEffect } from "react";
import { useState } from "react";
import { dataDBYOUTUBE } from "../dbCourse/data";
import { Box, TextareaAutosize, Typography } from "@mui/material";
import AccordionUsage from "../components/Acoordion";

const VideoPage = ({ data }) => {
  const [dataVideo, setDataVideo] = useState(data);
  const [video, setVideo] = useState("");
  useEffect(() => {
    switch (data) {
      case "JavaScript":
        setDataVideo(dataDBYOUTUBE.js);
        setVideo(dataDBYOUTUBE.js.videos[0].link);
        break;
      case "Python":
        setDataVideo(dataDBYOUTUBE.py);
        setVideo(dataDBYOUTUBE.py.videos[0].link);

        break;
      case "Java":
        setDataVideo(dataDBYOUTUBE.java);
        setVideo(dataDBYOUTUBE.java.videos[0].link);

        break;

      default:
        break;
    }
  }, []);

  return (
    <Box
      sx={{ width: "100%", height: "60%", marginTop: "70px", padding: "10px" }}
    >
      <Typography variant="h3" sx={{ color: "#094460", marginBottom: "10px" }}>
        {dataVideo.name}{" "}
      </Typography>
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
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
            border: "1px solid green",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default VideoPage;
