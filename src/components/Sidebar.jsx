import { Link } from "react-router-dom";

export default function Sidebar(){

return(
  <div className="flex flex-col h-screen w-1/6 gap-2 pl-4 p-8 pb-5">
  <Link to="/board" className="font-bold hover:bg-red-200 rounded-md p-2">Vision Board</Link>
  <Link to="/wishes?status=active" className="font-bold hover:bg-red-200 rounded-md p-2 ">Active Wishes</Link>
  <Link to="/wishes" className="font-bold hover:bg-red-200 rounded-md p-2 ">All Wishes</Link>
  <Link to="/calendar" className="font-bold hover:rgba(250,250,250) rounded-md p-2">Calendar</Link>
    <div className="mt-5">
      <button>Add New Wish</button>
    </div>
  </div>
)
}