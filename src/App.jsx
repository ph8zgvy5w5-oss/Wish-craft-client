import './index.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/Calendar";
import FormPage from "./pages/FormPage";
import About from "./pages/About";
import Profile from "./pages/Profile";
import VisionBoard from "./pages/VisionBoard";
import WishList from "./pages/WishList";
import WishPage from "./pages/WishPage";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
function App() {

  return (
    <>
      <Navbar/>
      <div className='flex h-screen w-full'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pages/About' element={<About />} />
        <Route path='/wishes:id' element={<WishPage />} />
        <Route path='/wishes' element={<WishList />} />
        <Route path='/create' element={<FormPage />} />
        <Route path='/user' element={<Profile />} />
        <Route path='/board' element={<VisionBoard />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/' element={<NotFound />} />
      </Routes>
      </div>
    </>
  )
}

export default App
