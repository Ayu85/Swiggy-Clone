import { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantData } from "../utils/mockData";
import axios from 'axios';
import { Link } from "react-router-dom";
function Body() {
    const [searchText, setsearchText] = useState("");
    const [originalRestaurantData, setoriginalRestaurantData] = useState([]);
    const [filteredRestaurantData, setfilteredRestaurantData] = useState([]);
    const [restaurantAPIdata, setrestaurantAPIdata] = useState([]);
    // useEffect(() => {
    //     getRestaurantData();
    //     getRestaurantDataAPI();
    // }, [])
    // const getRestaurantDataAPI = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.321684&lng=82.987289&page_type=DESKTOP_WEB_LISTING")
    //     const json = await data.json();
    //     console.log(json);
    //     const usableData = await json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     setoriginalRestaurantData(usableData);
    //     setfilteredRestaurantData(usableData);

    // }
    useEffect(() => {
        getd();
    }, [])
    const getd = async () => {
        const d1 = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.321684&lng=82.987289&page_type=DESKTOP_WEB_LISTING")
        setfilteredRestaurantData(d1?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setoriginalRestaurantData(d1?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("restdata", d1);
    }
    // function getRestaurantData() {
    //     setfilteredRestaurantData(restaurantData);
    //     console.log(restaurantData);
    // }
    function getFilteredData() {
        return originalRestaurantData.filter((items) => {
            return items?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
        })
    }
    if (!filteredRestaurantData) return <h1>none</h1>
    return (

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

            <div className="body">
                {filteredRestaurantData?.map((items) => {
                    return (<Link to={"/restaurant/" + items.info.id} >
                        <Card {...items?.info} />
                    </Link>)

                })}
            </div>

        </div>
    )
}
export default Body;