import { Link } from "react-router-dom";
import "../stylesheets/NavbarSS.css";

export const Navbar = () => {
<<<<<<< HEAD
    return ( 
        <div className="topnav">
            <Link className="navbar__links" to="/">Home</Link>
            <Link className="navbar__links" to="/about">About</Link>         
        </div> 
        );
};


=======
  return (
      // <h1>Cookbook</h1>
    <div className="topnav">
      <Link className="navbar__links" to="">
        Home
      </Link>
      <Link className="navbar__links" to="/about">
        About
      </Link>
      <Link className="navbar__links" to="/add">
        Add Recipes
      </Link>
>>>>>>> Development2

      {/* <a className="active" href="#home">Home</a> */}
    </div>
  );
};
