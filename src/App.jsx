import './index.css'
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NotFound from "../pages/NotFound"
import Calendar from "../pages/Calendar"
import FormPage from "../pages/FormPage"
import About from "../pages/About"
import Profile from "../pages/Profile"
import VisionBoard from "../pages/VisionBoard"
import WishListe from "../pages/WishList"
import WishPage from "../pages/WishPage"
function App() {

  return (
    <>
      <div>Welcom on WishCraft</div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pages/About' element={<AboutPage />} />
        <Route path='/wishes' element={<WishPage />} />
        <Route path='/' element={<WishListe />} />
        <Route path='/' element={< />} />
        <Route path='/' element={<About />} />
        <Route path='/' element={<About />} />
        <Route path='/pages/About.jsx' element={<About />} />
        <Route path='/' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
