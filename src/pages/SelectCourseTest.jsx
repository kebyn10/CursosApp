import React from 'react'
import VideoPage from './VideoPage'
import Test from './Test'
import { quizzes } from '../dbCourse/data'

const SelectCourseTest = ({data}) => {
    const [select,setSelect] = React.useState("cursos")
    console.log(data);
    console.log(quizzes[`${data}`]);
    
  return (
    select == "cursos" ? (<VideoPage data={data} setSelect={(e)=>setSelect(e)}/>) : (<Test  questions={quizzes[`${data}`]} />)
  )
}

export default SelectCourseTest