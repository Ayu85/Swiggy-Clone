import { Link } from 'react-router-dom';
import logo from '../assets/pngwing.com.png'
import { useState } from 'react';
function Header() {
    const [isLogged, setisLogged] = useState(false);
    const [btn, setBtn] = useState("Login");
    return (
        <div className="header-bar flex flex-wrap justify-between items-center py-2 pl-2 pr-2">
            <div className="logo">
                <img src={logo} width={130} />
            </div>


            <div className="btn-area flex gap-6" >
                <div className='nav-buttons '>
                    <ul className='flex gap-6'>
                        <Link to={'/'}>  <li>Home</li></Link>
                        <Link to={'/about'}>  <li>About</li></Link>
                        <Link to={'/'}>  <li>Cart</li></Link>
                        <Link to={'/instamart'}><img src='https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_150/InstamartMicrosite/Instamartlogo' width={120} /></Link>
                    </ul>
                </div>
                {
                    (isLogged == false) ?
                        (<button className="log-btn bg-orange-500 w-24 text-white rounded-sm" onClick={() => {
                            setisLogged(true)

                        }}>Login</button>)
                        :
                        (<button className="log-btn  bg-orange-500 w-24 text-white rounded-sm" onClick={() => {
                            setisLogged(false)
                        }}>Logout</button>)
                }

            </div>

        </div>

    )

}
export default Header;
