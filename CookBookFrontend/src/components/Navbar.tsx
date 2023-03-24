import { Link } from "react-router-dom";
import "../styleSheets/NavbarSS.css";

export const Navbar = () => {
    return ( 
        <div className="topnav">
            <Link className="navbar__links" to="/">Home</Link>
            <Link className="navbar__links" to="/about">About</Link>
        
          {/* <a className="active" href="#home">Home</a> */}
         
        </div> 
        );
};



