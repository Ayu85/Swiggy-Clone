import logo from '../assets/instamartAsset/header-logo.png'
import decorlogo from '../assets/instamartAsset/decor.jpeg'
import furntLogo from '../assets/instamartAsset/furniture.jpg'
import grocLogo from '../assets/instamartAsset/groceries.jpeg'
import laptopLogo from '../assets/instamartAsset/laptop.jpeg'
import skinLogo from '../assets/instamartAsset/skin.png'
import wDress from '../assets/instamartAsset/w-dress.webp'
import mDress from '../assets/instamartAsset/m-dress.avif'
import perfLogo from '../assets/instamartAsset/perfumes.webp'
import phoneLogo from '../assets/instamartAsset/phone.jpeg'
import cardOfferLogo from '../assets/instamartAsset/card-offer.webp'
import InstaCard from './InstaCard'
import Shimmer from './Shimmer'
// import useInstamart from '../utils/useInstamart'
import { useState, useEffect } from 'react'
function Instamart() {
    const [martData, setdata] = useState([]);

    useEffect(() => {
        const getMarts = async () => {
            const data = await fetch("https://dummyjson.com/products")
            const json = await data.json();
            setdata(json?.products);
        }
        getMarts();
    }, [])
    function getFilteredData(type) {
        return martData.filter((items) => {
            return items.category == type;
        })
    }
    console.log(martData)
    return martData.length === 0 ? <Shimmer /> : (
        <>
            <div>
                <div className='header-logo'><img src={logo} /></div>
                <div className='categories-wrapper'>
                    {/* categories part */}
                    <div className='item-container' onClick={() => {
                        const type = laptops;
                        const d = getFilteredData(type);
                        setdata(d)
                    }}>
                        <img src={laptopLogo} />
                        <h4>Laptops</h4>
                    </div>
                    <div className='item-container' onClick={() => {
                        const d = getFilteredData("smartphones")
                    }}>
                        <img src={phoneLogo} />
                        <h4>Mobiles</h4>
                    </div>
                    <div className='item-container' onClick={() => {
                        const d = getFilteredData("mens-shirts")
                    }}>
                        <img src={mDress} />
                        <h4>Mens wear</h4>
                    </div>
                    <div className='item-container' onClick={() => {
                        const d = getFilteredData("womens-dresses")
                    }}>
                        <img src={wDress} />
                        <h4>Women wear</h4>
                    </div>
                    <div className='item-container' onClick={() => {
                        const d = getFilteredData("skincare")
                    }}>
                        <img src={skinLogo} />
                        <h4>Skin care</h4>
                    </div>
                    <div className='item-container' onClick={() => {
                        const d = getFilteredData("womens-dresses")
                    }}>
                        <img src={perfLogo} />
                        <h4>Perfumes</h4>
                    </div>
                    <div className='item-container'>
                        <img src={grocLogo} />
                        <h4>Grocery</h4>
                    </div>
                    <div className='item-container'>
                        <img src={furntLogo} />
                        <h4>Furniture</h4>
                    </div>
                    <div className='item-container'>
                        <img src={decorlogo} />
                        <h4>Home decor</h4>
                    </div>

                </div>
                <div><img src={cardOfferLogo} /></div>
            </div>
            <div className="mart-body">
                {
                    martData.map((items) => {
                        return <InstaCard {...items} />
                    })
                }
            </div>
        </>


    )
}

export default Instamart;