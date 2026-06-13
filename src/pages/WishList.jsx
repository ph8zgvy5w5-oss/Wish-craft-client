//import LoadBar from "../components/LoadBar"
import { useWishContext } from "../context/Wish.context"
import {Link} from "react-router-dom"

export default function WishList() {
const {wishes, deleteWish} = useWishContext()

  if(!wishes) return <p>loading</p>
  if (wishes.length === 0) return <p> No wishes yet! </p>

  return( 

    <div className="text-red-300 text-2xl font-serif text-center font-stretch-ultra-condensed">
      Wonderfull dream to live
    <div> <p className="text-sm text-center ">
  Between the lines of our lives, quiet whispers gleam,<br />
  Longings for journeys, and corners to dream.<br />
  Leave your wishes here, hold the fleeting day,<br />
  And plant the seeds of tomorrow along the way...
</p>
</div>

<div>
  {wishes.map((wish) => {
   console.log(wish);

   return (
    <div key={wish.id}>
      <Link to ={`/wishes/${wish.id}`}>
      <h2> {wish.title}</h2>
      </Link>
      <p> {wish.category}</p>
      <p> {wish.description}</p>
      <p> {wish.frequency}</p>
      
      <button onClick={() => deleteWish(wish.id)}>Delete</button>
   </div>


    )
  

  })}

  
    </div>
    </div>
  )
}
