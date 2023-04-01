import { Link } from "react-router-dom";
import '../stylesheets/Navbar.css'
import Login from './Login';
import { auth } from '../services/firebase';
import { FC, useEffect, useState } from "react";
import { addUser, getUsers } from "../services/api";
import { IUser } from "../services/interfaces";

type NavbarProps = {
  userId: (userId: string) => void;
};

export const Navbar: FC<NavbarProps> = ({ userId }) => {
  const [user, setUser] = useState<any>(null);

  const addUserId = async (id: string) => {
    const users = await getUsers();
    const userId = users.filter(user => user.userId === id);
    console.log(id);
    console.log(userId);
    if (userId !== null) {
      console.log("we are not posting");
      return;
    } else {
      console.log("i should be posting");
      const user: Partial<IUser> = {
        userId: id,
      }
      await addUser(user);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      userId(user!.uid);
      addUserId(user!.uid);
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
        <Link className="navbar__links" to="/mealplanner">
          Meal planner
        </Link>
      </div>

      <div className="navbar__links">
        {user === null && <Login />}
        {user !== null && <span>Welcome, {user.displayName}!</span>}
        {user !== null && <button className="button signout recipe__button recipe__button__navbar" onClick={() => auth.signOut()} >Sign out</button>}
      </div>

    </div>
  );
};
