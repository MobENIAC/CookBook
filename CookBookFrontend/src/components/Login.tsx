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
import '../stylesheets/Login.css'

type LoginProps = {
  userId: (userId: string) => void;
};

const Login: FC<LoginProps> = ({ userId }) => {
  const saveUser = () => {
    signInWithGoogle();
    auth.onAuthStateChanged(user => {
      if (user != null) {
        userId(user!.uid);
        var addedUser: Partial<IUser> = {
          userId: user!.uid,
        }
        addUser(addedUser);
        console.log("User created");
      }
    })
  }

  return (
    <div>
      <button className="button signout recipe__button__navbar" onClick={saveUser}><i className="fab fa-google"></i>Sign in</button>
    </div>
  )
}

export default Login;
