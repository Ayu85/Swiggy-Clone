import { IMG_URL } from "../utils/Config";
function RestaurantCard({ imageId, name, price, defaultPrice,description }) {
    return (
        <div className="menu-card flex w-[51 %] ml-[50%] -translate-x-[50%] justify-between gap-10 border-b border-slate-200 py-10">
            <div>
                <h4 className="restaurant-card-name text-xl text-zinc-600 font-bold">{name}</h4>
                <h4 className="text-xl font-semibold">&#8377;{price / 100 || defaultPrice / 100}</h4>
                <p>{description}</p>
            </div>
            <img src={IMG_URL + imageId} className="w-[90px] h-28 rounded-lg"/>
        </div>
    )
}
export default RestaurantCard;