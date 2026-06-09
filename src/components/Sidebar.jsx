import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function Sidebar(){

return(
  <div className="flex flex-col h-screen w-auto min-w-[200px] gap-2 pl-4 p-8 pb-5">
  <Link to="/board" className="font-bold hover:bg-soft-blush hover:border-r-2 hover:border-pink-950 rounded-6 p-2 w-full">Vision Board</Link>
  <Link to="/wishes?status=active" className="font-bold hover:bg-soft-blush  hover:border-r-2 hover:border-pink-950 rounded-6 p-2 w-full">Active Wishes</Link>
  <Link to="/wishes" className="font-bold hover:bg-soft-blush hover:border-r-2 hover:border-pink-950 rounded-6 p-2 w-full">All Wishes</Link>
  <Link to="/calendar" className="font-bold hover:bg-soft-blush hover:border-r-2 hover:border-pink-950 rounded-6 p-2 w-full">Calendar</Link>
    <div className="mt-5">
      <Button>Craft new wish</Button>
    </div>
  </div>
)
}