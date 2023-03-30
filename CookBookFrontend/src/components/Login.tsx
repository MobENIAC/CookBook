import { signInWithGoogle } from '../services/firebase';


const Login = () => {
  return (
    <div>
      <button className="recipe__button recipe__button__navbar" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in</button>
    </div>
  )
}

export default Login;