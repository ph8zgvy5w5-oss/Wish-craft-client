import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Images/logowishcraft2.png"


export default function Navbar() {
  return (
<nav className="flex gap-6 p-4 ">
  <div className="flex row-auto w-auto gap-2 text-2xl"><img src={logo} alt="logo" width="50px"/>
  <div>Wishcraft</div>
  </div>
  <Link to="/">Home</Link>
  <Link to="/pages/About">About</Link>
  <Link to="/wishes">Wishes</Link>
  <Link to ="/calendar">Calendar</Link> 
  <Link to="/board">VisionBoard</Link>
  <div className="ml-auto flex gap-4">
    <Link to="/create">Create</Link>
    <Link to="/user">Profile</Link>
  </div>
  </nav>
  )
}