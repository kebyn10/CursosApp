import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import armLeft from "../assets/AhorcadoImages/armLeft.png";
import armRight from "../assets/AhorcadoImages/armRight.png";
import chest from "../assets/AhorcadoImages/chest.png";
import head from "../assets/AhorcadoImages/head.png";
import pants from "../assets/AhorcadoImages/pants.png";
import shoes from "../assets/AhorcadoImages/shoes.png";

const Hangman = ({ correctWord, maxAttempts = 6,dataGame }) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [inputLetter, setInputLetter] = useState("");
  const [open, setOpen] = useState(false);


  useEffect(()=>{
    setGuessedLetters([" "])
    handleGuess()
  },[])
  const normalizedWord = correctWord.toLowerCase();

  const handleGuess = () => {
    const letter = inputLetter.toLowerCase();
    if (
      !letter ||
      guessedLetters.includes(letter) ||
      wrongGuesses.includes(letter)
    )
      return;

    if (normalizedWord.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setWrongGuesses([...wrongGuesses, letter]);
    }

    setInputLetter("");
  };

  const renderWord = () => {
    return normalizedWord.split("").map((letter, index) => (
      <span key={index} style={{ marginRight: 5, fontSize: 24 }}>
        {guessedLetters.includes(letter) ? letter : "_"}
      </span>
    ));
  };
  const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  const isWon = normalizedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isLost = wrongGuesses.length >= maxAttempts;

  return (
    <Box sx={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>Juego del Ahorcado- sobre el video: {dataGame.video}</h2>
        <h5>¡Evita que el muñeco sea completado adivinando las letras de la palabra escondida!</h5>
        <Button variant="contained" size="small" sx={{margin:"10px"}} onClick={()=>handleOpen()}>Pista</Button>


        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 300,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
    }}
  >
    <Typography id="modal-title" variant="h6" component="h2">
      Pista
    </Typography>
    <Typography id="modal-description" sx={{ mt: 2 }}>
      {dataGame?.clue}
    </Typography>
    <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
      Cerrar
    </Button>
  </Box>
</Modal>
      <Box
        sx={{
          position: "relative",
          width: "120px",
          height: "300px",
          margin: "0 auto",
          transform: 'translateX(-20px)'
        }}

      >
        <img
          src={head}
          alt=""
          style={{ position: "absolute", top: 0, left: "35px", width: "100px",display:maxAttempts - wrongGuesses.length<=5 ? "" : "none" }}
         
        />
        <img
          src={chest}
          alt=""
          style={{
            position: "absolute",
            top: "60px",
            left: "35px",
            width: "100px",
            display:maxAttempts - wrongGuesses.length<=4 ? "" : "none" 
          }}
        />
        <img
          src={armLeft}
          alt=""
          style={{
            position: "absolute",
            top: "50px",
            left: "-12px",
            width: "120px",
            display:maxAttempts - wrongGuesses.length<=3 ? "" : "none" 
          }}
        />
        <img
          src={armRight}
          alt=""
          style={{
            position: "absolute",
            top: "64px",
            left: "65px",
            width: "130px",
            display:maxAttempts - wrongGuesses.length<=2 ? "" : "none" 
          }}
        />
        <img
          src={pants}
          alt=""
          style={{
            position: "absolute",
            top: "125px",
            left: "35px",
            width: "110px",
            display:maxAttempts - wrongGuesses.length<=1 ? "" : "none" 
          }}
        />
        <img
          src={shoes}
          alt=""
          style={{
            position: "absolute",
            top: "245px",
            left: "30px",
            width: "110px",
            display:maxAttempts - wrongGuesses.length<=0 ? "" : "none" 
          }}
        />
      </Box>
      <Box sx={{ marginBottom: "10px" }}>{renderWord()}</Box>

      {isWon && (
        <p style={{ color: "green" }}>
          ¡Ganaste! La palabra era "{correctWord}"
        </p>
      )}
      {isLost && (
        <p style={{ color: "red" }}>
          ¡Perdiste! La palabra era "{correctWord}"
        </p>
      )}

      {!isWon && !isLost && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="text"
            maxLength={1}
            value={inputLetter}
            onChange={(e) => setInputLetter(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGuess()}
            style={{ fontSize: 18 }}
            autoComplete="off"
          />
          <Button
            onClick={handleGuess}
            sx={{ marginTop: 2, borderRadius: "30px", marginBottom: "10px" }}
            variant="contained"
            color="primary"
          >
            Adivinar
          </Button>
        </Box>
      )}

      <p>Letras incorrectas: {wrongGuesses.join(", ")}</p>
      <p>Intentos restantes: {maxAttempts - wrongGuesses.length}</p>
    </Box>
  );
};

export default Hangman;
