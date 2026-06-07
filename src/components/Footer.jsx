import {Link } from "react-router-dom"
import React from "react"
import Logo from "../assets/Images/logowishcraft2.png"
import { IoLogoGithub } from "react-icons/io5"


export default function Footer() {
  return (
    <>
    <div className="flex p-4 pt-8 pr-8 bg-seashell">
      <div className="mr-auto"><img src={Logo} className="h-[50px]" ></img>/* © 2026 WishCraft */Footer</div>
      <div className="flex gap-4">
       <Link className="flex gap-2 items-center ">
       <IoLogoGithub />
        Github repo
       </Link>
       <Link>Privacy policy</Link>
       <Link>About us</Link>
      </div>
    </div>
    </>
  )
}
