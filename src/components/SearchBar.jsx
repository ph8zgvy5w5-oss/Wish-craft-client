
import {useState, useEffect } from "react"
import { IoSearch } from "react-icons/io5"

export default function SearchBar({list, setList}) {

  
  const handleChange = (event) => {
setList(preValue => preValue.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase())))

}
 


  return (
    <div className="flex w-[400px] bg-soft-blush p-2 pr-5 pl-5 rounded-2  h-12 items-center gap-2  "><IoSearch /><input className="w-full outline-0" type="text" placeholder="Search" onChange={handleChange}/></div>

    
  )
}
