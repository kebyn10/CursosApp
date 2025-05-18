import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Alert,
} from '@mui/material';

const Test = ({
  questions
}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState(null);
  const [currentQuestion,setCurrentQuestion] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    console.log(questions);
    
      setCurrentQuestion(questions);

  },[index,currentQuestion,questions])


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setResult(null); // Clear previous result when changing option
  };
   const handleCheckAnswer = () => {
    setResult(selectedOption === currentQuestion[index].correctAnswer);
  };

  const handleClick=()=>{
    if(index<questions.length-1 && selectedOption){
      setIndex(index+1);
      setSelectedOption("");
      setResult(null);
    }
  }

  const handleClickBack=()=>{
    if(index>0){
      setIndex(index-1);
      setSelectedOption("");
      setResult(null);
    }
  }

  return ( <Box
      data-aos="fade-down"
      data-aos-duration="1000"
      sx={{ width: "100%", height: "60%", marginTop: "70px", padding: "40px" }}
    >


      <Card variant="outlined" sx={{ width:"80%", margin: 'auto', mt: 4 }}>
      <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h6">{currentQuestion?.length>0 ?  currentQuestion[index].question : "" }</Typography>

        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <RadioGroup value={selectedOption} onChange={handleChange}>
            {
            
            currentQuestion[index]?.options?.map((option, idx) => (
              <FormControlLabel
                key={idx}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
             <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={()=>{handleClickBack()}}
          disabled={index === 0}
        >
          Anterior
        </Button>
          <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleCheckAnswer}
          disabled={!selectedOption}
        >
          Comprobar
        </Button>
          <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={()=>{handleClick()}}
          disabled={index === currentQuestion.length-1 || !selectedOption}
        >
          Siguiente
        </Button>
        </Box>

        {result !== null && (
          <>
          <Alert
            severity={result ? 'success' : 'error'}
            sx={{ mt: 2 }}
          >
            {result ? '¡Correcto!' : 'Incorrecto. Intenta de nuevo.'}
          </Alert>

          {
            !result &&(
              <Typography variant="body2" sx={{ mt: 2 }}>
                {currentQuestion[index].feedback[selectedOption]}
              </Typography>
            )
          }
          
          </>
          

        )}
      </CardContent>
    </Card>
    </Box>)
  
}

export default Test