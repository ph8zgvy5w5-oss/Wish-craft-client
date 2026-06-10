import react from "react"

export default function Input({children, placeholder,label}) {
  return (
    <>
    <label>{children}</label>
    <input  type="text"  className="w-full  bg-almond-silk h-10 px-5 pr-16 rounded-5 text-sm focus:outline-none" placeholder={placeholder}/>
    </>
  )
}
