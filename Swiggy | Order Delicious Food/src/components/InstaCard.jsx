import { useState } from 'react-dom'
function InstaCard({ id, title, description,thumbnail }) {

    return (
        <div className="insta-card">
            <img src={thumbnail}/>
            <h3 >{title}</h3>
            <p>{description.substring(0,80)}</p>
        </div>
    )
}
export default InstaCard;