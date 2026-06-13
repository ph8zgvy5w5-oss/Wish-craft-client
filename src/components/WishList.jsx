/* import { useContext } from "react"
import { WishContext } from "../context/Wish.context" */
import { useWishContext } from "../context/Wish.context"
function WishList() {
  const { wishes, deleteWishes } = useWishContext()
  console.log("this is the wishList pages", wishes)



  return (
  
  <div className="text-font-serif max-w-7xl mx-auto px-4 py-3 bg-slate-50  p-4 rounded-2">
{/*  { wishes ? wishes.map( wishes => ) : <LoadBar /> } */}
   <h2 className="text-red-300 text-2xl font-serif text-center font-stretch-ulgittra-condensed">My Personal Wishes ({wishes.length})</h2>

   {wishes?.length || 0 ? (
    <p>Your wishList is empty. Choose a model below </p>
   ) : (
    <div >
      {wishes && wishes.map(wishes =>(
        <div key={wishes.id}>
          <h3>{wishes.title}</h3>
          <p>{wishes.description}</p>
          <button onClick={() => deleteWishes(wishes.id)}>Remove</button>
        </div>
      ))}
    </div>

   )
   }  
  </div>
  )
}
export default WishList;