import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Chicken Farm</h2>
        <p>Fresh eggs and organic chicken straight from our farm to your table.</p>

        <div className="contact-info">
          <p><FaPhoneAlt /> +223 939 090 81</p>
          <p><FaEnvelope /> keitachickenfarm@gmail.com</p>
          <p><FaWhatsapp /> +223 939 090 81</p>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/22393909081" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

        <p className="copyright">© {new Date().getFullYear()} Chicken Farm. All rights reserved.</p>
      </div>
    </footer>
  );
}



