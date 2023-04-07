import React, { useState } from 'react';
import "../styles/PrayerRequest.css"
export const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    request: '',
    email: '',
    whatsapp: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // code to submit form data goes here
  };

  const listOfInputs = [
    {name: "name", placeHolder: "Name", required: true},
    {name: "phone", placeHolder: "Phone", required: true},
    {name: "request", placeHolder: "Request", required: true},
    {name: "email", placeHolder: "Email", required: false},
    {name: "whatsapp", placeHolder: "WhatsApp", required: false},
  ]
  return (
    <form onSubmit={handleSubmit} className='formCont'>
        <h3>Prayer Request</h3>
        {listOfInputs.map((d) => (
            <div className='inoutContainer'>
                <label className='inputLabel' htmlFor={d?.name}>{d?.placeHolder}:</label>
                <input
                type="text"
                name={d?.name}
                className="inputField"
                // value={formData.}
                placeholder={d?.placeHolder}
                onChange={handleChange}
                required={d?.required}
                />
            </div>
        ))}
      <button type="submit" className='submitButton'>Submit</button>
    </form>
  );
}
