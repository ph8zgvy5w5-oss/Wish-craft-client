import { createContext, useEffect, useState, useContext } from "react";
import api from "../lib/api"


const WishContext = createContext()

export default function WishProvider({ children }) {
    const [wishes, setWishes] = useState([])

    const getWishes = async () => {
            try {
                const response = await api.get("/wishes")
                console.log(response.data)
                setWishes(response.data)
            } catch (error) {
                console.log(error)
            }
    }

/*     const getWishe = async (id) => {
        try {
            const response = await api.get(`/wishes/${id}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
        
    } */




    useEffect(() => {
        getWishes()
    }, [])
    return <WishContext.Provider value={{ wishes, getWishes }}>{children}</WishContext.Provider>
}

function useWishContext() {
    const context = useContext(WishContext);

    if(context === undefined) {
        throw new Error("useWishContext doit être utilisé à l'intérieur de WishProvider");
    }
    return context
}
export { WishContext, useWishContext }