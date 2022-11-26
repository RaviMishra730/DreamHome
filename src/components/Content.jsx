import React from 'react';
import './Content.css';

// Importing Images 
import Commercial_1 from '../assets/Commercial-1.jpg';
import Commercial_2 from '../assets/Commercial-2.jpg';
import Commercial_3 from '../assets/Commercial-3.jpg';

const Content = () => {
    return (
        <div className="best">
            <h1>Aapki apni Haveli</h1>
            <div>
                <p><span className="bold">All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>AgriCultural</p>
            </div>
            <div className="container">
                <img src={Commercial_1} alt="Loading....." />
                <img src={Commercial_2} alt="Loading....." />
                <img src={Commercial_3} alt="Loading....." />
                {/* <img src={} alt="" /> */}
            </div>
            <button className='btn'>View All</button>
      </div>
  )
}

export default Content;