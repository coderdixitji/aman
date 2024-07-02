import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import White_arrow from '../../assets/white-arrow.png'
import React from 'react'


function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1c09e670-cc40-467d-8b82-d7059d1e7373");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className='contact-col'>
      <h3>Send us a message <img src={msg_icon} alt='' /></h3>
      <p>Feel free to reach out through  contct form or find our contact information below. Your feedback, questions, and suggestions are important to us we strive to provide exceptional service to our university community.</p>
      <ul>
      <li><img src={mail_icon} alt=''/> Contact@GreatStack.dev </li>
      <li><img src={phone_icon} alt=''/> +1 123-456-7890</li>
      <li><img src={location_icon} alt=''/> 77 Massachusetts Ave, Cambridge <br/> MA 02139, United States</li>
      </ul>
      </div>
      <div className='contact-col'>
      <form onSubmit={onSubmit}>
      <lable>Your Name</lable>
      <input type='text' name='name' placeholder='Enter Your Name' required/>
      <lable>Phone Number</lable>
      <input type='tel' name='phone' placeholder='Enter Your Mobile number' required/>
      <lable>Write your message here</lable>
      <textarea name='message' id=''  rows={6} placeholder='Enter your message' required></textarea>
      <button type='submit'  className='btn dark-btn' > Submit now <img src={White_arrow} alt=''/></button>
      </form>
      <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
