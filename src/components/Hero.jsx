import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './Hero.css';
const Hero = () => {
    return (
        <div className="hero">
            <div className="content">
                <h1 className='glow'> Aao Kabhi Haveli Pe </h1>
                <p className='search-text'>Welcome, Aapki Apni <span>MyHaveli</span>.Com Website Pe</p>
                <form className='search'>
                    <div>
                        <input type="text" placeholder='Haveli..' />
                    </div>
                    <div className="radio">
                        <input type="radio" checked />
                        <label>Buy</label>
                        <input type="radio"/>
                        <label>Rent</label>
                        <button type='submit'><AiOutlineSearch className = "icon"/></button>
                    </div>
                </form>
            </div>
      </div>
  )
}

export default Hero;