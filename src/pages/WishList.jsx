/* import { useContext } from "react"
import { WishContext } from "../context/Wish.context" */
import { useWishContext } from "../context/Wish.context"
export default function WishList() {
  const {wishes} = useWishContext()
  console.log("this is the wishList pages", wishes)
  return (
    <div>WishList</div>
  )
}
