import { Link, useNavigate } from "react-router-dom";
import '../stylesheets/Navbar.css'
import Login from './Login';
import { auth } from '../services/firebase';
import { FC, useEffect, useState } from "react";
import { addUser, getUsers } from "../services/api";
import { IDay, IUser } from "../services/interfaces";

type NavbarProps = {
  userId: (userId: string) => void;
};

export const Navbar: FC<NavbarProps> = ({ userId }) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      if (user != null) {
        userId(user!.uid);
      }
    })
  }, []);

  return (
    <div className="navbar">
      <div>
        <Link className="navbar__links" to="">
          Home
        </Link>
        
        {user !== null && <Link className="navbar__links c" to="/add">
          Add Recipes
        </Link>}
        {user !== null && <Link className="navbar__links" to="/mealplanner">
          Meal planner
        </Link>}
        <Link className="navbar__links" to="/about">
          About
        </Link>
      </div>

     {/*  <div className="navbar__links"> */}
        {user === null && <Login userId={userId} />}
        {user !== null && <span className="welcomeUser">Welcome, {user.displayName}!</span>}
        {user !== null && <button className="button signout recipe__button__navbar" onClick={() => { auth.signOut(); navigate('/home') }} >Sign out</button>}
   {/*    </div> */}

    </div>
  );
};