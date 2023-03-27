import { Link } from "react-router-dom";
import '../stylesheets/Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__links" to="">
        Home
      </Link>
      <Link className="navbar__links" to="/about">
        About
      </Link>
      <Link className="navbar__links" to="/add">
        Add Recipes
      </Link>
    </div>
  );
};
