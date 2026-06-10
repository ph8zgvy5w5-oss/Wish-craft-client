import {Link} from "react-router-dom"


export default function Card({children, link}) {
  return (
    <>
    <div className="bg-white shadow-md p-4 rounded-4 flex">
      <Link to={link} >
    {children}</Link>
    </div>
    </>
  )
}