import React, {useState} from 'react'
import "../styles/LandingPage.css";
import logo from "../assets/images/logo.png"
import { About } from './About';
import {FaPray} from "react-icons/fa"
import { ContactUs } from './ContactUs';
import { Footer } from './Footer';
import { PrayerRequest } from './PrayerRequest';


export const LandingPage = () => {

    const [modal, setModal] = useState(false);


  return (
    <div className='container'>
        <nav className='primaryNav'>
            <div className='logoContainer'>
                <img src={logo} alt="" />
                <h2>Title</h2>
            </div>
            <div className='primaryOptions'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>  
        <nav className='secondaryNav'>
            <ul>
                <li>List</li>
                <li>List</li>
                <li>List</li>
                <li>List</li>
                <li>List</li>
                <li>List</li>
            </ul>
        </nav>
        <div className='videoContainer'>
            <div className='pray' onClick={() => setModal(!modal)}>
                <FaPray size={25} />
            </div>
            { modal ? 
                <div className='modal'>
                    <div className='modalForm'>
                        <PrayerRequest />
                    </div>
                    <div className='modalClose' onClick={() => setModal(!modal)}></div>
                </div>
            :
                null }
            <video
            autoPlay
            loop
            controls
            playsInline
            src="https://www.shutterstock.com/shutterstock/videos/1077625313/preview/stock-footage-happy-family-mom-and-daughter-holding-hands-together-happy-family-in-park-at-sunset-mom-holds.webm">
            </video>
        </div>
        <About />
        <ContactUs />
        <Footer />
    </div>
  )
}
