import  { FaCheck } from "react-icons/fa6";


export default function Habits({habit}) {
  console.log(habit)
 return !habit.completed &&  (
     <div className="flex rounded-3 w-full bg-white p-4 pl-8 justify-between "   >
        <div className="flex gap-2 items-center justify-center ">
             <div className="bold text-ml">{habit.title}</div>
             <div>-</div>
             <div className="text-sm" > {habit.frequency}</div>
        </div>
        <div className="rounded-1 h-full p-2 h-2 border-2 border-pink-700 border-dotted"><FaCheck className="text-pink-700"/></div>
     </div>
 )
}