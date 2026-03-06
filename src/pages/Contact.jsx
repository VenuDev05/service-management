import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_03z10rm",
      "template_12fwvah",
      form.current,
      "1bA-u34Rl7UeQWW8N"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form ref={form} onSubmit={sendEmail}>

        <input
          type="text"
          name="from_name"
          placeholder="Enter Your Name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Enter Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Enter Your Message"
          rows="5"
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Contact;