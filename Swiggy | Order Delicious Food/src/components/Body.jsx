import { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantData } from "../utils/mockData";
import axios from 'axios';
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { getFilteredData } from "../utils/helper";
import offer1 from '../assets/offer1.webp'
import offer2 from '../assets/offer2.webp'
import offer3 from '../assets/offer3.webp'
import useOnline from "../utils/useOnline";
import NetworkError from "./NetworkError";
function Body() {
    const [searchText, setsearchText] = useState("");
    const [originalRestaurantData, setoriginalRestaurantData] = useState([]);
    const [filteredRestaurantData, setfilteredRestaurantData] = useState([]);
    const isOnline = useOnline();
    useEffect(() => {
        getRestaurantData();
    }, [])

    function getRestaurantData() {
        setoriginalRestaurantData(restaurantData)
        setfilteredRestaurantData(restaurantData);
        console.log(restaurantData);
    }
    if (isOnline === false) return <NetworkError />

    return filteredRestaurantData.length === 0 ? <Shimmer /> : (
        <div>
            <div className="search-area">
                <input type="text" placeholder="Find taste near you" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value)
                }} />
                <button onClick={() => {
                    setfilteredRestaurantData(getFilteredData(searchText, originalRestaurantData));
                }}>
                    Find
                </button>
            </div>
            {/* offers section */}
            <div className="offer-combo">
                <h1 className="offer-header">Best offers for you</h1>
                <div className="offer-section">
                    <img src={offer1} />
                    <img src={offer2} />
                    <img src={offer3} />
                </div>
                <h1 className="offer-header">Whats going on your mind?</h1>

            </div>

            <div className="body">
                {filteredRestaurantData?.map((items) => {
                    return (<Link to={"/restaurant/" + items.info.id} >
                        <Card {...items?.info} key={items.info.id} />
                    </Link>)

                })}
            </div>

        </div>
    )
}
export default Body;