import { useContext } from "react"
import { WishContext } from "../src/ontext/Wish.context"
import { useWishContext } from "../src/context/Wish.context"

export default function WishList() {
  const {wishes, deleteWish } = useWishContext()

  if (!wishes) 
    return <p>Loading...</p>

  if(wishes.length === 0) 
    return <p> No wishes yet! </p>
  
  

  return (
    <div> 
      {wishes.map((wish) => (
        <div key={wish._id}>
          <h2>{wish.title} </h2>
          <p>{wish.category}</p>
          <p>{wish.description}</p>
          <p>{wish.frequency}</p>
          <button onClick={() => deleteWish(wish._id)}>Delete</button>
      
    </div>

     ))}

     </div>
  )
}
