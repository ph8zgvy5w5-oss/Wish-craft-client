import WishForm from "../components/WishForm";

function CreateWishPage({createWish}){
    return (
        <div className="create-wish-page">
            <h1> Create a Wish</h1>
            <WishForm createWish = {createWish}/>


        </div>
    );
}

export default CreateWishPage;