import { IMG_URL } from "../utils/Config";
function RestaurantCard({ imageId, name, price, defaultPrice,description }) {
    return (
        <div className="menu-card">
            <div>
                <h2>{name}</h2>
                <h3>&#8377;{price / 100 || defaultPrice / 100}</h3>
                <p>{description}</p>
            </div>
            <img src={IMG_URL + imageId} />
        </div>
    )
}
export default RestaurantCard;