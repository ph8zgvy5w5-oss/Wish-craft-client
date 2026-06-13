import { createContext, useEffect, useState, useContext } from "react";
import api from "../lib/api";

const WishContext = createContext();

function WishProvider({ children }) {
  const [wishes, setWishes] = useState(null);
  const categories = ["Travel", "Career", "Finance", "Tech","Personal Growth", "Learning", "Wellness", "Lifestyle", "Hobbies", "Mindset", "Creativity"];
  const frequencies = ["Daily", "Weekly", "Bi-weekly", "Monthly"];

  const getWishes = async () => {
    try {
      const response = await api.get("/wishes");
      console.log(response.data);
      setWishes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createWish = async (wishData) => {
    try {
      await api.post("/wishes", wishData);
      getWishes();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWish = async (id) => {
    try {
      await api.delete(`/wishes/${id}`);
      getWishes();
    } catch (error) {
      console.log(error);
    }
  };

  const updateWish = async (id, wishData) => {
    try {
      await api.put(`/wishes/${id}`, wishData);
      getWishes();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishes();
  }, []);

  return (
    <WishContext.Provider
      value={{ wishes, createWish, deleteWish, updateWish, categories, frequencies }}
    >
      {children}
    </WishContext.Provider>
  );
}

function useWishContext() {
  const context = useContext(WishContext);
  if (!context) {
    throw new Error("useWishContext must be used within a WishProvider");
  }
  return context;
}

export default WishProvider ;
export { WishContext, useWishContext };
