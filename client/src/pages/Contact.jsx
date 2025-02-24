import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us for fresh eggs and organic chickens!</p>

      <div className="contact-details">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <h3>Call Us</h3>
          <p><a href="tel:+22393909081" target="_blank">+223 939 090 81</a></p>
        </div>

        <div className="contact-item">
          <FaWhatsapp className="icon" />
          <h3>WhatsApp</h3>
          <p><a href="https://wa.me/22393909081" target="_blank">Chat with us</a></p>
        </div>

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p><a href="mailto:modibokeita@gmail.com" target="_blank">modibokeita@gmail.com</a></p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <h3>Location</h3>
          <p> Kati, Malibougou, Mali</p>
        </div>
      </div>
    </div>
  );
}


