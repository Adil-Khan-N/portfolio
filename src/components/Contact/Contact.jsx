import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="full">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
        <MdOutlineEmail/>
          <article className="contact_option">
            <h4>Email</h4>
            <h5>dummyegator</h5>
            <a href="mailto:dummyegator@gmail.com">Send a message</a>
          </article>

          <RiMessengerLine/> 
          <article className="contact_option">
            <h4>Messenger</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="https://facebook.in">Send a message</a>
          </article>

          <BsWhatsapp/>
          <article className="contact_option">
            <h4>WhatsApp</h4>
            <h5>+123457890</h5>
            <a href="mailto:dummyegator@gmail.com">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form className="contact_form">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
