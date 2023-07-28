import './App.css'
import { BrowserRouter,Router ,Routes } from 'react-router-dom'
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Info from "./pages/Info.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Router path = "/" element={<Home/>} />
        <Router path = "/about" element={<About/>} />
        <Router path = "/info" element={<Info/>} />
      </Routes>
    </div>
    </BrowserRouter>
   
    </>
  )
}

export default App
