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
                <div><img src={laptopLogo} /></div>
                <div><img src={phoneLogo} /></div>
                <div><img src={mDress} /></div>
                <div><img src={wDress} /></div>
                <div><img src={skinLogo} /></div>
                <div><img src={perfLogo} /></div>
                <div><img src={grocLogo} /></div>
                <div><img src={furntLogo} /></div>
                <div><img src={decorlogo} /></div>

            </div>
        </div>

    )
}
export default Instamart;