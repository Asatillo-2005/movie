import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/home.jsx"
import About from "./pages/movie/about.jsx"
import Info from "./pages/Info.jsx"
import Movie_inner from './components/movie-inner/movie-inner'
import Header from './components/header/header.jsx'
import User from './components/user/user'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';


function App() {

  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path='/user' element={<User/>}/>
        <Route path="/movie_inner/:movieId" element={<Movie_inner />} />
      </Routes>
    </>
  )
}

export default App
