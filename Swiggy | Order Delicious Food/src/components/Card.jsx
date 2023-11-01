import { IMG_URL } from "../utils/Config";
function Card({ name, cloudinaryImageId, cuisines, areaName, avgRatingString, sla }) {
    return (
        <div className="card">
            <img src={IMG_URL + cloudinaryImageId} />
            <div className="card-attributes">
                <h2>{name}</h2>
                <div className="rating-time">
                    <h4> ⭐{avgRatingString}</h4>
                    <h4>📌  {sla?.deliveryTime}  mins</h4></div>
                <h4 className="light-font cuisines">{cuisines?.slice(0, 4)?.join(",")}</h4>
                <h4 className="light-font " >🌏{areaName}</h4>
            </div>
        </div>
    )
}
export default Card;