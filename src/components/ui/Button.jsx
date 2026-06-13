import { Link } from "react-router-dom"
//import react from "react"

export default function Button({children, link}) {
  return (
    <>
    <div className="mt-4 mb-4">
      <Link to={link} className="bg-powder-blush hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-2">{children}</Link>
    </div>
    </>
  )
}