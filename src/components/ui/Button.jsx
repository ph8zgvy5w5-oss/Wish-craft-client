import { Link } from "react-router-dom"
import react from "react"

export default function Button({children, link , onClick}) {
  return (
    <>
    <div className="mt-4 mb-4">
      <Link to={link} onClick={onClick} className="bg-powder-blush hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2">{children}</Link>
    </div>
    </>
  )
}