//import LoadBar from "../components/LoadBar"
import { WishContext } from "../context/Wish.context"
import {useContext, useState, useEffect} from "react"
import SearchBar from "../components/SearchBar"
import { useWishContext } from "../context/Wish.context"


export default  function WishList() {

  let res = useWishContext

  let wishes = useContext(WishContext)
  const [list, setList] = useState([])

   console.log(`wishes resutlt`,wishes)

  useEffect(() => {
    setList(wishes.wishes)
  },[])

 
 
 // if(!wishes) return <LoadBar />
  return (
    <>
    <div>WishList</div>
    <SearchBar search={list} setList={setList} />
   {useEffect(() => {
     console.log(`list`,list)
   },[list])}
    </>
  )
}
