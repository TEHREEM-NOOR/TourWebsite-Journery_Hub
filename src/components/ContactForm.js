import { useState } from "react";
import "../styles/ContactFormStyles.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <p>Have questions? Send us a message and our team will reach out.</p>

      {submitted && <p className="success-msg">Message sent successfully!</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="03XX-XXXXXXX"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📍 Office: Gulberg III, Lahore, Pakistan</p>
        <p>📞 Phone: +92 300 1234567</p>
        <p>✉️ Email: info@trippy.pk</p>
      </div>
    </div>
  );
}

export default ContactForm;