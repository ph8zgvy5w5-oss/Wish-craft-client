
import {useState, useEffect } from "react"
import { IoSearch } from "react-icons/io5"

export default function SearchBar({ wishList, setSearch }) {

  const handleChange = (event) => {
    const value = event.target.value?.toLowerCase() || ""

    if (!Array.isArray(wishList)) {
      setSearch([])
      return
    }

    setSearch(
      value
        ? wishList.filter((item) => item.title?.toLowerCase().includes(value))
        : wishList
    )
  }
 


  return (
    <div className="flex w-[400px] bg-soft-blush p-2 pr-5 pl-5 rounded-2  h-12 items-center self-center gap-2  "><IoSearch /><input className="w-full outline-0" type="text" placeholder="Search" onChange={handleChange}/></div>

    
  )
}
