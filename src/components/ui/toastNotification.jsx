//import React from "react"
import { IoClose } from "react-icons/io5";
import { useState } from "react";




export default function ToastNotification({children}) {
  const [show, setShow] = useState(true)
  const ShowNotification = ()=>{
   setShow(false)
   
  }

  if (!show) return null
 
  
  return (
    <div className="fixed bottom-4 right-[calc(50%-90px)] max-w-90px shadow-md bg-powder-blush text-white p-4 rounded-4" >
      {children}
      <IoClose onClick={ShowNotification} className="absolute top-2 right-2  curson-pointer"/>
    </div>
  )
}