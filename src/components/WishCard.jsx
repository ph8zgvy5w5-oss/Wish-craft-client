import Card from "../components/ui/Card"
//import Buttons from "./ui/Button";
//import ProgressBar from "./ui/progressBar";

function WishCard({ image, category, title, description, Button }) {
  return (
    <Card>
    <div className={`wish-card ${category}`}> 
      <img src={image} alt={title} className="wish-card-img" />
      
      </div>

      <div className="p-4"></div>
      <div className="wish-card-content">
        <span className="text-xs font-bold text-gray-400 uppercase">{category}</span>
        <h3 className="text-xl font-bold mt-1">{title}</h3>
        <p className="text-slate-600 text-sm font-serif mt-2">{description}</p>
        {/* <ProgressBar></ProgressBar> */}
        <div className="p-1 text-xs">
        <label for="dep"
    >Date &nbsp;</label
    >
      <input
    id="dep"
    name="dep"
    type="date"
    min="2026-06-13"
    max="2022-12-35"
    value="2026-06-13" /> </div>

        <div className="mt-4">
          {Button}
      </div>
    </div>
    </Card>
  );
}

export default WishCard;