export default function({percent,label,}){
return(
  <div className="flex-row  max-w-100 pt-2 pb-2"  >
<div className="flex justify-between pb-1">
  <div>nAME</div>
  <div>{percent}%</div>
</div>
<div className="w-100 h-2 bg-gray-300 rounded-full overflow-hidden">
<div className="bg-powder-blush h-full" style={{width:`${percent}%`}}></div>
</div>
</div>
)

}