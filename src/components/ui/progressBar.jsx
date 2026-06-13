export default function({percent,label,habits}){

  function progress(habits) {
   
    let num = habits.reduce(( acc, current)=>{
     acc += current.timeObjective
     return acc 
    },0 )

    let streaks = habits.reduce((acc, current )=> {

     acc += current.streak 
     return acc
    },0)
 
    console.log(num)
  return (num / streaks) *100
   }



return(
  <div className="flex-row  max-w-100 pt-2 pb-2"  >
<div className="flex justify-between pb-1">
  <div>nAME</div>
  <div>{habits && progress(habits)}%</div>
</div>
<div className="w-100 h-2 bg-gray-300 rounded-full overflow-hidden">
<div className="bg-powder-blush rounded-full h-full" style={{width:`${percent}%`}}></div>
</div>
</div>
)

}