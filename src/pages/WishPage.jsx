import React from 'react'
import { Link } from "react-router-dom"
import {useState, useEffect, useContext } from "react"
import Button from '../components/ui/Button'
import ProgressBar from '../components/ui/progressBar'
import { useParams } from 'react-router-dom'
import { WishContext } from '../context/Wish.context'
import Card from '../components/ui/Card'
import Mountain from '../assets/Images/mountain.png'
import Habits from '../components/Habits'
import Agenda from '../assets/Images/agenda.png'



export default function WishPage() {


 const {wishes} = useContext(WishContext)

 const [wishList, setWishList] = useState([])
 const {id} = useParams()
 const [item, setItem] = useState({})
 const [habits, setHabits] = useState([])


 /* unction getTotalProgress() {
   let habits = item.habits
   habits.reduce(( acc, current)=>{
    acc += current.timeObjective
    return acc 
   },0 )
 return habits 
  }
  */
 
 
   const getTotalProgress =()=> {
    let habits = item.habits
    let num = habits.reduce(( acc, current)=>{
     acc += current.timeObjective
     return acc 
    },0 )
 
    console.log(num)
  
   }

 
 useEffect(() => {
   if (Array.isArray(wishes)) {
     setWishList(wishes)
     setItem(wishes.find(wish => wish.id === id))
    } 
    
  }, [wishes])

  

  console.log(Mountain)

 console.log(item, habits) 


 

 

  return (
    < div className= " flex flex-col items-center w-full justify-center h-fit p-8" >
    <div className="w-full h-[600px] bg-cover  overflow-hidden relative" style={{backgroundImage:`url(${item.image})`}}>
      
      <div className="w-full h-full bg-linear-to-t from-white  to-transparent  flex flex-col p-30 items-start justify-center">
        <div>Active dream</div>
        <h1 className="text-2xl">{item.title}</h1>
        <div className="rounded-4 mt-8 bg-gray-200 p-8 pt-8">
          <div>{`${item.category} wish`}</div>
          <ProgressBar percent={50} label="hello" habits={item && item.habits}></ProgressBar>
        </div>
    
         </div>
    </div>
    <div className="w-full h-full grid-cols-2 grid gap-8 pt-15 p-20">
      <div className="rounded-3 w-full bg-white p-8 shadow-almond-silk overflow-hidden"  ><h2>Description of dream</h2>
      {item.description}
      </div >
      <div className="w-full bg-white shadow-almond-silk overflow-hidden rounded-3 bg-no-repeat bg-right bg-contain" style={{backgroundImage: `url(${Agenda})`}}  >
        <div className=" w-full h-full bg-linear-to-t from-white p-8 to-transparent  flex flex-col rounded-3 items-start justify-center"><h2>Currently</h2>
      {item.category}
          </div>
      </div>
      <div className="rounded-3 bg-almond-silk p-8 pt-4 shadow-almond-silk flex flex-col gap-2">
        <div className= "flex flex-row mb-4 pl-2 justify-between items-center">
          <h2>Daily Micro-habits</h2>
        <Button>Add Streak</Button>
        </div>
        {item.habits && item.habits.map((habit, index) => (
          <Habits key={`${habit.title}-${index}`} habit={habit} />
        ))}</div>
      <div className="rounded-3 backdrop-blur-sm  flex flex-col justify-end  bg-cover h-[200px] bg-no-repeat p-8 shadow-almond-silk text-white" style={{backgroundImage:`url(${Mountain})`}}  > 
    
      <h2>Launch Another Dream</h2>
      <div className="flex flex-row gap-2">
      <Button className="w-full">Launch another dream</Button>
      <Button>View Gallery</Button>
      </div>
      </div>
    </div>
    </div>
  )
  }
  