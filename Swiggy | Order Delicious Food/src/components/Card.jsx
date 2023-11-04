import { IMG_URL } from "../utils/Config";
function Card({ name, cloudinaryImageId, cuisines, areaName, avgRatingString, sla }) {
    return (
        <div className="card">
            <img src={IMG_URL + cloudinaryImageId} />
            <div className="card-attributes">
                <h3 className="card-name">{name}</h3>
                <div className="rating-time">
                    <h5> ⭐{avgRatingString}</h5>
                    <h5>📌  {sla?.deliveryTime}  mins</h5></div>
                <h4 className="light-font cuisines">{cuisines?.slice(0, 4)?.join(",")}</h4>
                <h4 className="light-font " >🌏{areaName}</h4>
            </div>
        </div>
    )
}
export default Card;