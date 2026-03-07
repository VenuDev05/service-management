import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function EmployeeRegister() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [job, setJob] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLng(pos.coords.longitude);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!lat || !lng) {
      alert("Please get your location first");
      return;
    }

    try {

      await addDoc(collection(db, "workers"), {
        name: name,
        email: email,
        password: pass,
        job: job,
        latitude: lat,
        longitude: lng
      });

      alert("Employee Registered Successfully");

      // clear form
      setName("");
      setEmail("");
      setPass("");
      setJob("");
      setLat("");
      setLng("");

    } catch (error) {

      console.error(error);
      alert("Registration Failed");

    }

  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Employee Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Job Type"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />

          <button type="button" onClick={getLocation}>
            Get Location
          </button>

          <p>Lat: {lat}</p>
          <p>Lng: {lng}</p>

          <button type="submit">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

export default EmployeeRegister;