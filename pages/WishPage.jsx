import {useParams, Link } from "react-router-dom";

function WishPage ({ wishes}) {
    const {id} = useParams ();

    const selectedWish = wishes.find((wish) => wish.id === Number (id));

    if (!selectedWish) {
        return (
            <div> 
                <h1> Wish not found </h1>
                <Link to="/wishes"> Back </Link>
            </div>
        );
    }

    return (
        <div className = "wish-page">
            <h1>{selectedWish.title}</h1>
            <p>{selectedWish.category}</p>
            <p>{selectedWish.description}</p>
            <p>{selectedWish.status}</p>

            <h2> Habits</h2>
            {selectedWish.habits.length === 0 && (
                <p> No habits added yet </p>
            )}

            {selectedWish.habits.map ((habit) => (
                <div>
                    <p> {habit.title}</p>
                    <p> {habit.frequency}</p>
                    <p> {habit.streak}</p>
                </div>
            ))}

            <Link to = "/edit/:id" >
            <button> Edit Wish </button>
            
        </Link>
        </div>
    )
}

export default WishPage;