import './index.css'
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NotFound from "../pages/NotFound"
import Calendar from "../pages/Calendar"
import FormPage from "../pages/FormPage"
import About from "../pages/About"
import Profile from "../pages/Profile"
import VisionBoard from "../pages/VisionBoard"
import WishList from "../pages/WishList"
import WishPage from "../pages/WishPage"
import EditWishPage from "../pages/EditWishPage"
import {useState} from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import WishProvider from './context/Wish.context'

function App() {
  const [wishes, setWishes] = useState ("");

  const createWish = (newWish) => {
    setWishes ([...wishes, newWish]);
  };

  return (
    <WishProvider>
    <Router>
      <div>Welcome to WishCraft</div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pages/About' element={<About />} />
        <Route path='/wishes:id' element={<WishPage />} />
        <Route path='/wishes' element={<WishList/>} />
        <Route path='/create' element={<FormPage createWish={createWish}/>} />
        <Route path='/user' element={<Profile />} />
        <Route path='/board' element={<VisionBoard />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/edit/:id' element={<EditWishPage/>} />
      </Routes>
      <Footer/>
    </Router>
    </WishProvider>
  )
}

export default App
