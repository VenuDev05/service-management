import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc
} from "firebase/firestore";
import "./BookWork.css";
import { useNavigate } from "react-router-dom";

const BookService = () => {
  
  const navigate = useNavigate();
  const [workers, setWorkers] = useState([]);
  const [selectedJob, setSelectedJob] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const [nearbyWorkers, setNearbyWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);

  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  // ✅ Fetch workers
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "workers"),
      (snapshot) => {
        const workerList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setWorkers(workerList);
      }
    );

    return () => unsubscribe();
  }, []);

  // ✅ Get location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(Number(pos.coords.latitude));
      setLng(Number(pos.coords.longitude));
    });
  };

  // ✅ Distance function
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  // ✅ Find nearby workers
  const findNearbyWorkers = () => {

    if (!selectedJob) {
      alert("Please select a job");
      return;
    }

    if (!lat || !lng) {
      alert("Please get your location");
      return;
    }

    const filteredWorkers = workers.filter(
      (w) =>
        w.job?.toLowerCase() === selectedJob.toLowerCase()
    );

    if (filteredWorkers.length === 0) {
      alert("No workers available");
      return;
    }

    const workersWithDistance = filteredWorkers.map((worker) => {
      const dist = getDistance(
        lat,
        lng,
        worker.latitude,
        worker.longitude
      );

      return {
        ...worker,
        distance: dist
      };
    });

    workersWithDistance.sort((a, b) => a.distance - b.distance);

    setNearbyWorkers(workersWithDistance);
  };

  // ✅ Booking
  const handleBooking = async () => {

    if (!clientName || !clientAddress) {
      alert("Please enter your name and address");
      return;
    }

    if (!selectedWorker) {
      alert("Please select a worker");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        job: selectedJob.toLowerCase(),

        workerId: selectedWorker.id,
        workerName: selectedWorker.name,

        clientName: clientName,
        clientAddress: clientAddress,

        clientLat: lat,
        clientLng: lng,

        status: "pending",
        createdAt: new Date()
      });

      alert(`Booking confirmed with ${selectedWorker.name}`);

      setTimeout(() => {
        navigate("/");
      }, 1000);

      // reset
      setSelectedWorker(null);
      setNearbyWorkers([]);
      setClientName("");
      setClientAddress("");

    } catch (error) {
      console.error(error);
      alert("Booking failed");
    }
  };

  return (
    <div className="book-container">

      <h2>Book a Service</h2>

      {/* Client Details */}
      <input
        type="text"
        placeholder="Enter your name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />

      <textarea
        placeholder="Enter your address"
        value={clientAddress}
        onChange={(e) => setClientAddress(e.target.value)}
      />

      {/* Job Selection */}
      <select
        value={selectedJob}
        onChange={(e) => {
          setSelectedJob(e.target.value);
          setNearbyWorkers([]);
          setSelectedWorker(null);
        }}
      >
        <option value="">Select Job</option>
        <option value="Plumber">Plumber</option>
        <option value="Electrician">Electrician</option>
        <option value="Gardener">Gardener</option>
      </select>

      {/* Location */}
      <button onClick={getLocation}>
        Get My Location
      </button>

      <p>Lat: {lat || "Not set"}</p>
      <p>Lng: {lng || "Not set"}</p>

      {/* Find Workers */}
      <button onClick={findNearbyWorkers}>
        Find Nearby Workers
      </button>

      {/* Worker List */}
      <div className="worker-list">
        {nearbyWorkers.length === 0 && <p>No workers found</p>}

        {nearbyWorkers.map((worker) => (
          <div
            key={worker.id}
            className={`worker-card ${selectedWorker?.id === worker.id ? "active" : ""
              }`}
            onClick={() => setSelectedWorker(worker)}
          >
            <h3>{worker.name}</h3>
            <p>{worker.distance.toFixed(2)} km away</p>
            <p>{worker.job}</p>
          </div>
        ))}
      </div>

      {/* Confirm Booking */}
      {selectedWorker && (
        <button onClick={handleBooking}>
          Confirm Booking on {selectedWorker.name}
        </button>
      )}

    </div>
  );
};

export default BookService;