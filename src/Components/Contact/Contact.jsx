import React from 'react'
import './contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "c07f2b2f-7df9-489c-a474-dd20a48fd657");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>To learn more about how planting trees can enhance oxygen production on your land and explore our extensive database of tree species and their oxygen output.</p>
            <ul>
                <li><img src={mail} alt="" />contact@clevero2.com</li>
                <li><img src={phone} alt="" />+91 6362117693</li>
                <li><img src={location} alt="" />Bangalore, India<br />London, United Kingdom</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='enter your name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='enter your mobile number' required/>
                <label htmlFor="">Write a message</label>
                <textarea name="message" id="" cols="30" rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={whitearrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
