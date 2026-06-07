import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Images/logowishcraft2.png"
import Button from './ui/Button'


export default function Navbar() {
  return (
<nav className="flex align-center gap-6 p-4 bg-white">
  <div className="flex row-auto w-auto gap-2 text-2xl"><img src={logo} alt="logo" width="50px"/>
  <div className="font-bold self-center">Wishcraft</div>
  </div>
  <Link to="/">Home</Link>
  <Link to="/pages/About">About</Link>
  <Link to="/wishes">Wishes</Link>
  <Link to ="/calendar">Calendar</Link> 
  <Link to="/board">VisionBoard</Link>
  <div className="ml-auto flex gap-4">
    <Button link="/create">Create wish</Button>
    <Link to="/user">Profile</Link>
  </div>
  </nav>
  )
}