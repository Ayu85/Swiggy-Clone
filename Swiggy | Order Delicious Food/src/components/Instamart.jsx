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


function Instamart() {
    return (
        <div>
            <div className='header-logo'><img src={logo} /></div>
            <div className='categories-wrapper'>
                {/* categories part */}
                <div className='item-container'>
                    <img src={laptopLogo} />
                    <h4>Laptops</h4>
                </div>
                <div className='item-container'>
                    <img src={phoneLogo} />
                    <h4>Mobiles</h4>
                </div>
                <div className='item-container'>
                    <img src={mDress} />
                    <h4>Mens wear</h4>
                </div>
                <div className='item-container'>
                    <img src={wDress} />
                    <h4>Women wear</h4>
                </div>
                <div className='item-container'>
                    <img src={skinLogo} />
                    <h4>Skin care</h4>
                </div>
                <div className='item-container'>
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
        </div>

    )
}
export default Instamart;