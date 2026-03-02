import { useState } from "react";
import './Login.css'

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isRegister
      ? "http://localhost/backend/register.php"
      : "http://localhost/backend/login.php";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, pass }),
      });

      const data = await response.json();

      if (isRegister) {
        if (data.status === "success") {
          alert("Account created successfully ✅");
          setIsRegister(false);
        } else if (data.status === "exists") {
          alert("User already exists ❌");
        } else {
          alert("Registration failed ❌");
        }
      } else {
        if (data.status === "success") {
          alert("Login successful ✅");
          localStorage.setItem("user", user);
        } else {
          alert("Invalid username or password ❌");
        }
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

 return (
  <div className="auth-container">
    <div className="auth-card">
      <h2>{isRegister ? "Create Account" : "Login"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
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
    </div>
  </div>
);
}

export default Login;