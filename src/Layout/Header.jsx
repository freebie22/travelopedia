import logo from "../images/logo.png"

const Header = () => {
    return (
        <div className="py-2 pl-2 text-white">
            <img src={logo} alt="" style={{height: "35px", verticalAlign: "top"}}></img>
            <span className="h3 pt-2 text-white">React Course - TravelOPedia</span>
        </div>
    )
}

export default Header;