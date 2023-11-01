import { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantData } from "../utils/mockData";
function Body() {
    const [searchText, setsearchText] = useState("");
    const [originalRestaurantData, setoriginalRestaurantData] = useState([]);
    useEffect(() => {
        getRestaurantDataAPI();
    }, [])
    function getRestaurantDataAPI() {
        setoriginalRestaurantData(restaurantData);
        console.log(restaurantData);
    }


    return (

        <div>
            <div className="search-area">
                <input type="text" placeholder="Find taste near you" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value)
                }} />
                <button>
                    Find
                </button>
            </div>

            <div className="body">
                {originalRestaurantData.map((items) => {
                    return <Card {...items?.info} />
                })}
            </div>

        </div>
    )
}
export default Body;