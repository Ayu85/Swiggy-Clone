import logo from '../assets/instamartAsset/header-logo.png'
import decorlogo from '../assets/instamartAsset/decor.jpeg'
import furntLogo from '../assets/instamartAsset/furniture.jpg'
import grocLogo from '../assets/instamartAsset/groceries.jpeg'
import laptopLogo from '../assets/instamartAsset/laptop.jpeg'
import skinLogo from '../assets/instamartAsset/skin.png'
import wDress from '../assets/instamartAsset/w-dress.webp'
import mDress from '../assets/instamartAsset/m-dress.avif'
import perfLogo from '../assets/instamartAsset/perfumes.webp'



function Instamart() {
    return (
        <div>
            <div className='header-logo'><img src={logo} /></div>
            <div>
                {/* categories part */}
                <div><img src={laptopLogo} /></div>
                <div><img  /></div>
                <div><img src={laptopLogo} /></div>
                <div><img src={laptopLogo} /></div>
                <div><img src={laptopLogo} /></div>
                <div><img src={laptopLogo} /></div>

            </div>
        </div>

    )
}
export default Instamart;