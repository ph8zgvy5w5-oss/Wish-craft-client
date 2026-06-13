import {Link } from "react-router-dom"
import React from "React"
import Logo from "../assets/Images/logowishcraft2.png"
import { IoLogoGithub } from "react-icons/io5"


export default function Footer() {
  return (
    <footer className="w-full bg-seashell p-4 pr-8 border-t border-gray-200" >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="mr-auto"><img src={Logo} className="h-12.5" ></img> © 2026 WishCraft </div>
      <div className="flex gap-4">
       <Link className="flex gap-2 items-center ">
       <IoLogoGithub />
        <a href="https://github.com/ph8zgvy5w5-oss/Wish-craft-client" target="_blank"></a>
       </Link> 
       <Link to="/privacy" className="hover:underline">Privacy policy</Link>
       <Link to="/about" className="hover:underline">About us</Link>
      </div>
    </div>
    </footer>
  )
}
