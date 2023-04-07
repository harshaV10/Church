import React from 'react';
import "../styles/Footer.css";
import logo from "../assets/images/logo.png"
import {BsFacebook, BsWhatsapp, BsTelegram, BsInstagram, BsYoutube} from "react-icons/bs"

export const Footer = () => {
  return (
    <>
    <div className='footContainer'>
        <div className='footer'>
        <div className='footerDivOne'>
            <img src={logo} alt="" className='footerLogo'/>
            <li><BsWhatsapp /></li> 
            <li><BsTelegram /></li> 
            <li><BsFacebook /></li>
            <li><BsInstagram /></li>
            <li><BsYoutube /></li>
        </div>
        <div className='footerDiv'>
            <p>Main</p>
            <p>Gallery</p>
            <p>About Us</p>
            <p>Funds</p>
        </div>
        <div className='footerDiv'>
            <p>Join Us</p>
            <p>Volunter</p>
            <p>Prayer Request</p>
            <p>Beliver</p>
        </div>
        </div>
        <div className='copyRights'>
            <p>Copy Rights @ 2023</p>
        </div>
    </div>
    </>
  )
}
