import React from 'react';
import "../styles/Splash.css";
import "../../src/App.css"
import logo from "../assets/images/logo.png"

export const Splash = () => {
  return (
    <>
    <div className='container'>
        <div className='bgImage'>
          <div className='title'>
            <img src={logo} alt="" className='logoImg' />
            <h3>Welcome to
            Athumanesar Ministries</h3>
            <p>Our Divine Greeting in the name of our lord</p>
            <p>Jesus Christ !</p>
          </div>
        </div>
    </div>  
    </>
  )
}
