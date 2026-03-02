import React from 'react'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import './Home.css'
import Filter from './Service'
import works from '../Works'
import workers from '../workers'
import Workerslist from './Workerlist'

const Home = () => {
    return (
        <div>
            <div className="banner">
                <img src={banner1} alt="" />
                <img src={banner2} alt="" />
                <img src={banner3} alt="" />
            </div>
            <div className="filter">
                <ul className='filter-ul'>
                    <li>Electrians</li>
                    <li>Plumbers</li>
                    <li>Gardeners</li>
                </ul>
            </div>
            <div className="works-section">
                <h2>Recommended Works</h2>
                <Filter items={works} />
            </div>

            <div className="workers-section">
                <h2>Our Workers</h2>
                <Workerslist items={workers} />
            </div>
        </div>
    )
}

export default Home