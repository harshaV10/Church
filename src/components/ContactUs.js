import React from 'react'
import "../styles/ContactUs.css"

export const ContactUs = () => {
  return (
    <>
        <div className='ContactUs'>
            <header>
                <h1>Contact Us</h1>
            </header>
            <form className='contactForm'>
                <input type="text" name="name" id="" placeholder='Name' className='inputField' />
                <input type="text" name="phone" id="" placeholder='Phone' className='inputField' />
                <input type="text" name="request" id="" placeholder='Request' className='inputField' />
                <input type="text" name="email" id="" placeholder='Email' className='inputField' />
                <input type="text" name="whatsapp" id="" placeholder='WhatsApp' className='inputField' />
                <input type="submit" name="submit" id="" title='Submit' className='submitButton' />
            </form>
        </div>
    </>
  )
}
