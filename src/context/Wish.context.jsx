import { createContext, useEffect, useState } from "react";
import api from "../lib/api"


const WishContext = createContext()

export default function WishProvider({ children }) {
    const [wishes, setWishes] = useState(null)

    const getWishes = async () => {
            try {
                const response = await api.get("/wishes")
                console.log(response.data)
                setWishes(response.data)
            } catch (error) {
                console.log(error)
            }
    }


    useEffect(() => {
        getWishes()
    }, [])
    return <WishContext.Provider value={{ wishes }}>{children}</WishContext.Provider>
}

function useWishContext() {
    const context = useContext(WishContext)
    if(!context){
        return
    }
    return WishContext
}
export { WishContext, useWishContext }