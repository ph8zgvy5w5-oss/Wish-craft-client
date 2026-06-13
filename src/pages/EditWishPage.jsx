import WishForm from "../components/WishForm";
import {useState, useEffect} from "react";
import {useWishContext} from "../context/Wish.context";
import {useParams, useNavigate} from "react-router-dom";

function EditWishPage (){
    const{wishes, updateWish, categories, frequencies} =useWishContext();
    const navigate = useNavigate ();
    const {id} =useParams();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category,setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [frequency, setFrequency] = useState("");
    const [target, setTarget] = useState("");

    useEffect (() => {
        if (wishes) {
            const wish =wishes.find((wish) => wish._id === id);
            if (wish) {
                setTitle (wish.title);
                setImage(wish.image);
                setCategory(wish.category);
                setDescription(wish.description);
                setFrequency(wish.frequency);
                setTarget(wish.target);
            }
        }
    }, [wishes, id]);

    const handleSubmit =async (event) => {
        event.preventDefault();
        await updateWish (id,title,image,category, description, frequency, target);
        navigate("/wishes");
    };

    return (
        <div className="edit-wish-page">
            <h1> Edit your wish </h1>
            <WishForm />



        </div>
    );
}

export default EditWishPage;