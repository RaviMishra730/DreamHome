import React from 'react';
import './Featured.css';

import Residential_1 from '../assets/Residential-1.jpg';
import Residential_2 from '../assets/Residential-2.jpg';
import Residential_3 from '../assets/Residential-3.jpg';
import Residential_4 from '../assets/Residential-4.jpg';
import Residential_5 from '../assets/Residential-5.jpg';

import Commercial_1 from '../assets/Commercial-1.jpg';
import Commercial_2 from '../assets/Commercial-2.jpg';
import Commercial_3 from '../assets/Commercial-3.jpg';
import agriculture_2 from '../assets/agriculture-2.jpg';
const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Our Top Haveli's</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={Residential_5} alt='' />
                <img src={Residential_1} alt='Loading...' />
                <img src={Residential_2} alt='Loading...' />
                <img src={Residential_3} alt='Loading...' />
                <img src={Residential_4} alt='Loading...' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>Rs &#x20b9;2,30,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Commercial_1} alt='' />
                <img className='order-3' src={Commercial_2} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={Commercial_3} alt='' />


                <img className='order-4' src={Residential_2} alt='' />
                <img className='order-5' src={agriculture_2} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna. </p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className='price'>$2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured;