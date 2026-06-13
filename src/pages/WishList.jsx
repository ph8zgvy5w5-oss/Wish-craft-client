//import LoadBar from "../components/LoadBar"
import { WishContext } from "../context/Wish.context"
import { useContext, useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar"

export default function WishList() {
  const { wishes } = useContext(WishContext)
  const [wishList, setWishList] = useState([])
  const [search, setSearch] = useState([])
  const categories = ["All","tech", "lifestyle", "travel", "creativity"]

  useEffect(() => {
    if (Array.isArray(wishes)) {
      setWishList(wishes)
    }
  }, [wishes])

  console.log(`wishes result`, search)

 
 
 
 // if(!wishes) return <LoadBar />
  return (
    < div className= "flex flex-col  w-full justify-center h-fit p-8" >
    
    <SearchBar wishList={wishList} setSearch={setSearch}  />
    <FilterBar filter={search} setFilter={setSearch} list={wishList} categories={categories} />
    </div>
  )
}
