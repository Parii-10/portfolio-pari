import React, {useState} from "react";
import { EmailIcon } from "react-share";
import { TbPhoneCall } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import "../components/Contact.css";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;


function Contact(){
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessToken);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div id="contact" className="contact-container">
      <h1>
        Contact Me...
      </h1>
      <p>___________________________________________________________________________________________________________________________</p>

      <div className="contact-content">
        <div className="contact-left-side">
          <h2>Let's talk</h2>
          <p>
            I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="mail">
            <a href="mailto:sharmapari10004@gmail.com">
              <EmailIcon size={32} round={true} />
            </a>
            <p>sharmapari10004@gmail.com</p>
          </div>
          <div className="phone">
            <a href="tel:+919541281999">
              <TbPhoneCall size={32} />
            </a>
            <p>+91 9541281999</p>
          </div>
          <div className="location">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Haryana,India" 
              target="_blank" 
              rel="noopener noreferrer">
              <FaMapMarkedAlt size={32} />
            </a>
            <p className="detail">Haryana, India</p>
          </div>
          
          
          
        </div>
        <div className="contact-right-side">
          <form onSubmit={onSubmit} className="contact-form">
            <label htmlFor="">Your Name</label> 
            <input type="text" placeholder="Enter your Name" name="name" /> 
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter your Email" name="email" /> 
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Message Area"></textarea> 
            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;