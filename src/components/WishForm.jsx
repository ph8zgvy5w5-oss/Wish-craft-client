
import {useState} from "react";
import {useWishContext} from "../src/context/Wish.context";
import {useNavigate} from "react-router-dom";

function WishForm ({}) {

    const {createWish} = useWishContext();
    const navigate = useNavigate ();


    const [title, setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [frequency, setFrequency] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault ();
        await createWish ({title, category, description, frequency});
        navigate ("/wishes");
    };

    return (

        <form onSubmit = {handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
            </div>
            
            <div>
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)} />
            </div> 

            <div>
                <input
                    type="text"
                    placeholder="Frequency"
                    value={frequency}
                    onChange={(event) => setFrequency(event.target.value)} />
            </div> 

            <div>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} />
                    

            </div>
            <button type ="submit" >Create Wish </button>
            </form>
    
    );
}

export default WishForm;