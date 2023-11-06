import { IMG_URL } from "../utils/Config";
function RestaurantCard({ imageId, name, price, defaultPrice,description }) {
    return (
        <div className="menu-card ">
            <div>
                <h4 className="restaurant-card-name">{name}</h4>
                <h4>&#8377;{price / 100 || defaultPrice / 100}</h4>
                <p>{description}</p>
            </div>
            <img src={IMG_URL + imageId} />
        </div>
    )
}
export default RestaurantCard;