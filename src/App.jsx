import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CoursePage from './pages/CoursePage'

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cursos" element={<CoursePage/>} />
        {/* <Route path="/contact" element={<h1>Contact</h1>} /> */}
    </Routes>
   </Router>
  )
}

export default App
