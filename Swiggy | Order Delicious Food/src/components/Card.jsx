import { IMG_URL } from "../utils/Config";
function Card({name,cloudinaryImageId,cuisines,areaName}){
    return(
        <div className="card">
            <img src={IMG_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines?.join(',')}</h3>
            <h3>{areaName}</h3>
        </div>
    )
}
export default Card;