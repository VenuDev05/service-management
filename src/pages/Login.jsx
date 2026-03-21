import { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

function Login() {

  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (isRegister) {

        const userCredential = await createUserWithEmailAndPassword(auth, user, pass);
        localStorage.setItem("uid", userCredential.user.uid);
        alert("Account created successfully ✅");
        setIsRegister(false);

      } else {
        const userCredential = await signInWithEmailAndPassword(auth, user, pass);
        alert("Login successful ✅");
        localStorage.setItem("uid", userCredential.user.uid);
        navigate("/");

      }

    } catch (error) {

      if (error.code === "auth/email-already-in-use") {
        alert("User already exists ❌");
      } else if (error.code === "auth/invalid-credential") {
        alert("Invalid email or password ❌");
      } else {
        alert("Authentication error");
      }

    }

  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>{isRegister ? "Create Account" : "Login"}</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>

        </form>

        <p className="switch-text">
          {isRegister ? "Already have an account? " : "New user? "}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login here" : "Register here"}
          </span>
        </p>

        <p>
          Are you an employee?
          <Link to="/employee"> Register here</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;