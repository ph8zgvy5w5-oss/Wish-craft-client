import {useState} from "react";
import {useWishContext} from "../context/Wish.context";
import {useNavigate} from "react-router-dom";
import { GiTargetDummy } from "react-icons/gi";

function WishForm ({}) {

    const {createWish, categories, frequencies} = useWishContext();
    const navigate = useNavigate ();


    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category,setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [frequency, setFrequency] = useState("");
    const [target, setTarget] = useState("");

    const resetForm =() => {
        setTitle("");
        setImage("");
        setCategory("");
        setDescription("");
        setFrequency("");
        setTarget("");
    }


    const handleSubmit = async (event) => {
        event.preventDefault ();
        await createWish ({title, image,category, description, frequency, target});
        resetForm();
        navigate ("/wishes");
    };

    return (

        <form onSubmit = {handleSubmit}>

            <div>
                 <button type ="button" onClick={() => navigate("/")} >Back </button>
            </div>
            
            <div>
                <label> Wish Title </label>
                <input
                    type="text"
                    placeholder="e.g. Read 10 books"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
            </div>

            <div>
                <label> Image URL </label>
                <input
                    type="text"
                    placeholder="Paste an image URL"
                    value={image}
                    onChange={(event) => setImage(event.target.value)} />
            </div>
            
            <div>
                <label> Category </label>
                <select 
                    
                    value={category}
                    onChange={(event) => setCategory(event.target.value)} 
                    >
                        <option value="">Select a category </option>
                        {categories.map ((category) => (
                            <option key={category} value= {category}> {category}</option>
                        ))}
                </select>
            </div> 

            <div>
                <label> Description </label>
                <textarea
                    placeholder="Describe your wish..."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} />
                    
            </div>

            <div>
                <label> Frequency </label>
                <select
                    
                    value={frequency}
                    onChange={(event) => setFrequency(event.target.value)} 
                    
                    >
                        <option value =""> Select a habit frequency</option>
                        {frequencies.map ((frequency) => (
                            <option key={frequency} value={frequency} > {frequency} </option>
                            ))}
                            </select>            
            </div> 
            <div>
                <label> Target (number of times)</label>
                <input
                    type="number"
                    placeholder="e.g. 14 times" /* amount of times to complete wish */
                    value={target}
                    onChange={(event) => setTarget(event.target.value)} />
            </div> 

            <div>
                   <button type ="submit" >Create Wish </button>
            </div>

            <div>
                <button type ="button" onClick={resetForm} >Cancel </button>
            </div>

            
           
            
            
            </form>
    
    );
}

export default WishForm;