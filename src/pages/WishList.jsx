//import LoadBar from "../components/LoadBar"
import WishlistComponent from "../components/WishList";
import WishCard from "../components/WishCard";
import { useWishContext } from "../context/Wish.context";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

function WishListPage() {
  const { wishes } = useWishContext();

  // if(!models) return <LoadBar /> 

  return (
    <div className="text-red-300 text-2xl font-serif text-center font-stretch-ultra-condensed">
      <h2>Wonderfull dream to live</h2>
  
      <p className="text-base md:text-lg text-slate-500 font-serif italic leading-relaxed">
        Between the lines of our lives, quiet whispers gleam,<br />
        Longings for journeys, and corners to dream.<br />
        Leave your wishes here, hold the fleeting day,<br />
        And plant the seeds of tomorrow along the way...
      </p>
  
    <div className="mb-12 p-5">
      <WishlistComponent />
    </div>

      <hr className="border-slate-200  box-border" />

      <div className="max-w-7xl mx-10 px-9 py-7 bg-slate-300 min-h-screen">
        <h2>Wish Model would you like :</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishes && wishes.map(item => (
            <WishCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              Button={
                <Button onClick={() => wishes(item)}>➕ Add to my list</Button>
              }
            />
          ))}
        </div>
      </div>
    </div> 
  );
}

export default WishListPage;
