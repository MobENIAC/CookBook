// import { signInWithGoogle } from '../services/firebase';


// const Login = () => {
//   return (
//     <div>
//       <button className="recipe__button recipe__button__navbar" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in</button>
//     </div>
//   )
// }

// export default Login;

import { signInWithGoogle } from '../services/firebase';
import { FC, useEffect, useState } from "react";
import { auth } from '../services/firebase';
import { addUser } from '../services/api';
import { IDay, IUser } from "../services/interfaces";

type LoginProps = {
  userId: (userId: string) => void;
};

const Login: FC<LoginProps> = ({ userId }) => {
  const saveUser = () => {
    signInWithGoogle();
    auth.onAuthStateChanged(user => {
      if (user != null) {
        console.log(user!.uid);
        userId(user!.uid);
        // const monday: IDay = {
        //   id: 0,
        //   name: "Monday",
        //   recipes: []
        // }
        // const tuesday: IDay = {
        //   id: 0,
        //   name: "Tuesday",
        //   recipes: []
        // }
        // const wednesday: IDay = {
        //   id: 0,
        //   name: "Wednesday",
        //   recipes: []
        // }
        // const thursday: IDay = {
        //   id: 0,
        //   name: "Thursday",
        //   recipes: []
        // }
        // const friday: IDay = {
        //   id: 0,
        //   name: "Friday",
        //   recipes: []
        // }
        // const saturday: IDay = {
        //   id: 0,
        //   name: "Saturday",
        //   recipes: []
        // }
        // const sunday: IDay = {
        //   id: 0,
        //   name: "Sunday",
        //   recipes: []
        // }

        var addedUser: Partial<IUser> = {
          userId: user!.uid,
          // days: [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
        }


        addUser(addedUser);
      }
    })
  }

  return (
    <div>
      <button className="recipe__button recipe__button__navbar" onClick={saveUser}><i className="fab fa-google"></i>Sign in</button>
    </div>
  )
}

export default Login;
