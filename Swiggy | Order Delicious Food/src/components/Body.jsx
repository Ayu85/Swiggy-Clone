import { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantData } from "../utils/mockData";
import axios from 'axios';
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import offer1 from '../assets/offer1.webp'
import offer2 from '../assets/offer2.webp'
import offer3 from '../assets/offer3.webp'

function Body() {
    const [searchText, setsearchText] = useState("");
    const [originalRestaurantData, setoriginalRestaurantData] = useState([]);
    const [filteredRestaurantData, setfilteredRestaurantData] = useState([]);

    useEffect(() => {
        getRestaurantData();
    }, [])
    // useEffect(() => {
    //     getd();
    // }, [])
    // const getd = async () => {
    //     const d1 = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.321684&lng=82.987289&page_type=DESKTOP_WEB_LISTING")
    //     setfilteredRestaurantData(d1?.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setoriginalRestaurantData(d1?.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     console.log("restdata", d1);
    // }
    function getRestaurantData() {
        setoriginalRestaurantData(restaurantData)
        setfilteredRestaurantData(restaurantData);
        console.log(restaurantData);
    }
    function getFilteredData() {
        return originalRestaurantData.filter((items) => {
            return items?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
        })
    }
    if (!filteredRestaurantData) return null;
    return filteredRestaurantData.length === 0 ? <Shimmer /> : (

        <div>
            <div className="search-area">
                <input type="text" placeholder="Find taste near you" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value)
                }} />
                <button onClick={() => {
                    setfilteredRestaurantData(getFilteredData(searchText));
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