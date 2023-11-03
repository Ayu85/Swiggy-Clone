import axios from "axios";
import { useEffect, useState } from "react"
import { IMG_URL } from "../utils/Config";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom";
import { restaurantData } from "../utils/mockData";
import Shimmer from "./Shimmer";
function RestaurantMenu() {
    const [restaurantMenu, setrestaurantMenu] = useState([]);
    const [restData, setrestData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getMenuAPI();
        axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3893674&lng=83.0059224&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
            .then((resp) =>
                setrestaurantMenu(resp?.data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
            ).catch((err) => console.log(err))
    }, [])

    const getMenuAPI = () => {
        axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3893674&lng=83.0059224&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
            .then((resp) => setrestData(resp?.data?.data?.cards[0]?.card?.card?.info)//console.log(resp)
            ).catch((err) => console.log(err))
    }
    console.log(restaurantMenu, "menu data");
    console.log(restData);
    if (!restaurantMenu) return <Shimmer />;
    return restaurantMenu.length === 0 ? <Shimmer /> : (

        <div>
            <div className="rest-about">
                <div className="rest-about-left">
                    <h2 className="rest-name">{restData?.name}</h2>
                    <p>{restData?.cuisines?.join(",")}</p>
                    <p>{restData?.locality},{restData?.feeDetails?.message}</p>
                </div>
                <div className="rest-about-right">
                    <img src={IMG_URL + restData.cloudinaryImageId} />
                </div>
            </div>
            <div>
                <div className="rest-about-time-fee">
                    <h2>🕤{restData?.sla?.slaString}</h2>
                    <h2>💸 {restData?.costForTwoMessage}</h2>

                </div>
                <div className="offer-cards">
                    <div className="offer-card1">
                        <h3>{restData?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</h3>
                    </div>
                    <div className="offer-card2">
                        <h3>{restData?.aggregatedDiscountInfo?.descriptionList[1]?.meta}</h3>
                    </div >
                    <div className="offer-card3">
                        <h3>{restData?.aggregatedDiscountInfoV2?.descriptionList[0]?.meta}</h3>
                    </div >

                    <div className="offer-card4">
                        <h3>{restData?.aggregatedDiscountInfoV2?.descriptionList[1]?.meta}</h3>
                    </div >

                </div>
            </div>

            <div className="menu-card-container">
                {restaurantMenu?.map((items, ind) => {
                    return <RestaurantCard {...items.card.info} key={ind} />
                })}
            </div>

        </div>
    );


}


export default RestaurantMenu;