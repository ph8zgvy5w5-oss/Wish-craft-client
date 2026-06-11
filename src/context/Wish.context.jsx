import { createContext, useEffect, useState, useContext } from "react";
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
    };

    const createWish = async (wishData) => {
        try {
            await api.post("/wishes", wishData)
            getWishes()
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getWishes()
    }, [])
    

    const deleteWish =async (id) => {
        try {
            await api.delete (`/wishes/${id}`);
            getWishes ();

        } catch (error) {
            console.log (error);
        }
    }

    return (<WishContext.Provider value={{ wishes, createWish, deleteWish}}>{children}</WishContext.Provider>)
};

function useWishContext() {
    const context = useContext(WishContext)
    if (!context) {
        return
    }
    return context
}
export { WishContext, useWishContext }
