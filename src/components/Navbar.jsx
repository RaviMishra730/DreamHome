import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi';
// import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import './Navbar.css';

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="navbar">
            <div className="container">
                <h1><span><BsFillHouseFill />MyHaveli</span>.Com</h1>
                {/* <button className="btn">Sign In</button> */}
                <ul className={click ? 'nav-menu active':'nav-menu' }>
                    <li>Home</li>
                    <li>Search</li>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    <HiOutlineMenu className='icons'/>
                </div>
            </div>
      </div>
  )
}

export default Navbar;
