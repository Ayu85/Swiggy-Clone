import { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantData } from "../utils/mockData";
import axios from "axios";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { getFilteredData } from "../utils/helper";
import offer1 from "../assets/offer1.webp";
import offer2 from "../assets/offer2.webp";
import offer3 from "../assets/offer3.webp";
import useOnline from "../utils/useOnline";
import NetworkError from "./NetworkError";
function Body() {
  const [searchText, setsearchText] = useState("");
  const [originalRestaurantData, setoriginalRestaurantData] = useState([]);
  const [filteredRestaurantData, setfilteredRestaurantData] = useState([]);
  const isOnline = useOnline();
  useEffect(() => {
    getRestaurantData();
  }, []);

  function getRestaurantData() {
    setoriginalRestaurantData(restaurantData);
    setfilteredRestaurantData(restaurantData);
    console.log(restaurantData);
  }
  if (isOnline === false) return <NetworkError />;

  return filteredRestaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-area flex justify-center mt-5">
        <input
          type="text"
          placeholder="Find taste near you"
          value={searchText}
          className="border-slate-400 border w-96 pl-2 placeholder:text-sm  focus:bg-blue-50 h-10"
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="bg-orange-500 w-24 rounded-sm text-white"
          onClick={() => {
            setfilteredRestaurantData(
              getFilteredData(searchText, originalRestaurantData)
            );
          }}
        >
          Find
        </button>
      </div>
      {/* offers section */}
      <div className="offer-combo  hidden  md:flex flex-col gap-3 justify-center mt-5">
        <h1 className="offer-header ml-14 text-3xl ">Best offers for you</h1>
        <div className="offer-section flex flex-wrap justify-center gap-5 mb-20">
          <img src={offer1} className="w-[450px] h-[250px]" />
          <img src={offer2} className="w-[450px] h-[250px]" />
          <img src={offer3} className="w-[450px] h-[250px]" />
        </div>
      </div>

      <div className="body flex flex-wrap gap-10 justify-center mt-10">
        {filteredRestaurantData?.map((items) => {
          return (
            <Link to={"/restaurant/" + items.info.id}>
              <Card {...items?.info} key={items.info.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Body;
