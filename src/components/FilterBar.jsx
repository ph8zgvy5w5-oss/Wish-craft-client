import ActiveFilter from "./ui/ActiveFilter"
import Button from "./ui/Button"
import {useState, useEffect} from "react"



export default function FilterBar({ filter, setFilter, list = [], categories = [] }) {
  const [active, setActive] = useState(0)

  const handleclick = () => {
              setFilter(list.filter((item) => item.category === category));
              setActive(index); console.log(active)
            }

  return (
    <div className="flex gap-2 p-2 self-center">
      {categories.map((category, index) =>
        active === index ? (
          <ActiveFilter onClick={() => {
              setFilter(list.filter((item) => item.category === category));
              setActive(index); console.log(active)
            }} key={`${category}-${index}`} category={category}>
            {category}
          </ActiveFilter>
        ) : (
          <Button
            key={`${category}-${index}`}
            onClick={() => {
              setFilter(list.filter((item) => item.category === category));
              setActive(index); console.log(active)
            }}
          >
            {category}
          </Button>
        )
      )}
    </div>
  )
}
