import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <input
            type="text"
            placeholder="Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-input"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-input"
            required
          />
          <textarea
            rows={6}
            placeholder="Message"
            className="contact-textarea"
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
