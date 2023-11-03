import axios from "axios";
import { useEffect, useState } from "react"
import { IMG_URL } from "../utils/Config";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom";
function RestaurantMenu() {
    const [restaurantMenu, setrestaurantMenu] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getMenuAPI();
    }, [])
    const getMenuAPI =async  () => {
        console.log("api menu");
        const menu = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3893674&lng=83.0059224&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
            .then((resp) =>
            console.log(resp)
                // setrestaurantMenu(resp?.data?.data?.cards[5]?.card?.card?.itemCards)
            ).catch((err)=>console.log(err))
    }
    console.log(restaurantMenu, "menu data");


    return (
        <div className="menu-card-container">
            {restaurantMenu?.map((items) => {
                return <RestaurantCard {...items.card.info} />
            })}
        </div>

    );


}


export default RestaurantMenu;