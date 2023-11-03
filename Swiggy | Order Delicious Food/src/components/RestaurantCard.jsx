import { IMG_URL } from "../utils/Config";
function RestaurantCard({ imageId, name, price }) {
    return (
        <div className="menu-card">
            <img src={IMG_URL + imageId} />
            <h2>{name}</h2>
            <h3>{price.toString().substring(0,3)}</h3>
        </div>
    )
}
export default RestaurantCard;