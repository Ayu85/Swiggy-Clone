import logo from '../assets/pngwing.com.png'
function Header() {
    return (
        <div className="header-bar">
            <div className="logo">
                <img src={logo} width={130} />
            </div>
            <div className='nav-buttons'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='log-btn'>
                <button>Login</button>
            </div>
        </div>
    )
}
export default Header;
