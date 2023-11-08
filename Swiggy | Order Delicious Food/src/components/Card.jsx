import { IMG_URL } from "../utils/Config";
function Card({ name, cloudinaryImageId, cuisines, areaName, avgRatingString, sla }) {
    return (
        <div className="card w-[300px] flex flex-col gap-3">
            <img src={IMG_URL + cloudinaryImageId} className="w-[150px] sm:w-[270px] h-48  rounded-xl" />
            <div className="card-attributes ml-4">
                <h2 className="card-name text-xl font-semibold">{name}</h2>
                <div className="rating-time flex gap-1  text-slate-600">
                    <h5> ⭐{avgRatingString}</h5>
                    <h5>📌  {sla?.deliveryTime}  mins</h5></div>
                <h4 className="light-font cuisines  text-slate-600">{cuisines?.slice(0, 4)?.join(",")}</h4>
                <h4 className="light-font  text-slate-600 " >🌏{areaName}</h4>
            </div>
        </div>
    )
}
export default Card;