import banner1 from '../images/garden-banner.png'
import banner2 from '../images/electrition-banner.png'
import banner3 from '../images/plumber-banner.png'

import './Home.css'
import Filter from './Service'
import works from '../Works'
import Workerslist from './Workerlist'

import { db } from "../firebase"
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Home = () => {

    const [workers, setWorkers] = useState([])

    useEffect(() => {

        const unsubscribe = onSnapshot(
            collection(db, "workers"),
            (snapshot) => {

                const workerList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setWorkers(workerList)
            }
        )

        return () => unsubscribe()

    }, [])

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        const unsubscribe = onSnapshot(
            collection(db, "bookings"),
            (snapshot) => {

                const bookingList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setBookings(bookingList);
            }
        );

        return () => unsubscribe();

    }, []);


    return (
        <div>

            <div className="banner">
                <img src={banner1} alt="banner1" />
                <img src={banner2} alt="banner2" />
                <img src={banner3} alt="banner3" />
            </div>

            <div className="works-section">
                <h2>Recommended Works</h2>
                <Link to='/book'>
                    <Filter items={works} />
                </Link>
            </div>

            <div className="workers-section">
                <h2>Our Workers</h2>
                <Workerslist items={workers} />
            </div>

        </div>
    )
}

export default Home