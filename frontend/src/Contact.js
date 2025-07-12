import React from "react";
import Navbar from "./Navbar";
import "./Contact.css";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="contact-page olive-theme">
      <Navbar />
      <div className="contact-section-card">
        <form className="contact-form" style={{ margin: '0 auto', width: '100%', maxWidth: 600 }}>
          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Which" />
            </div>
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea placeholder="Write here..." rows={4}></textarea>
          </div>
          <button type="submit" className="send-btn">Send message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
} 