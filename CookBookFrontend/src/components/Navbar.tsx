import { Link } from "react-router-dom";
import '../stylesheets/Navbar.css'
import Login from './Login';
import { auth } from '../services/firebase';
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, []);
  return (
    <div className="navbar">
      <div>
        <Link className="navbar__links" to="">
          Home
        </Link>
        <Link className="navbar__links" to="/about">
          About
        </Link>
        {user !== null && <Link className="navbar__links c" to="/add">
          Add Recipes
        </Link>}
      </div>

      <div className="navbar__links">
        {user === null && <Login />}
        {user !== null && <span>Welcome, {user.displayName}!</span>}
        {user !== null && <button className="button signout recipe__button recipe__button__navbar" onClick={() => auth.signOut()} >Sign out</button>}
      </div>


      {/*    {user !== null &&
          <> uid
            <h1>Hello, <span></span>{user.displayName}</h1>
            <img src={user.photoURL} alt="" />
          </>} */}

    </div>
  );
};
