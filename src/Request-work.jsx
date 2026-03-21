import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function RequestWork({ jobType }) {

  const [lat,setLat] = useState(null);
  const [lng,setLng] = useState(null);

  const getLocation = () => {

    navigator.geolocation.getCurrentPosition((pos)=>{

      setLat(pos.coords.latitude);
      setLng(pos.coords.longitude);

    });

  };

  const createJob = async () => {

    const doc = await addDoc(collection(db,"jobs"),{
      jobType:jobType,
      userLat:lat,
      userLng:lng,
      status:"pending",
      workerId:null
    });

    alert("Job Created");

  };

  return(

    <div>

      <h2>{jobType} Request</h2>

      <button onClick={getLocation}>Get Location</button>

      <p>{lat}</p>
      <p>{lng}</p>

      <button onClick={createJob}>Request Worker</button>

    </div>

  );

}

export default RequestWork;