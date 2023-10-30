import logo from '../assets/pngwing.com'
function Header(){
    return(
        <div className="header-bar">
            <div className="logo">
                <img src={logo}/>
            </div>
        </div>
    )
}
export default Header;
