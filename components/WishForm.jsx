import {useState} from "react";

function WishForm ({createWish}) {
    const [title, setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [frequency, setFrequency] = useState("");

    return (

        <>
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
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} />
                    

            </div>
        </>
    )
}

export default WishForm;