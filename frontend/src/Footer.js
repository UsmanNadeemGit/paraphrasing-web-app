import React from "react";
import logo from "./parafraseo-logo.png";
import { FaFacebookF, FaInstagram, FaXTwitter, FaPinterestP } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-olive">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Parafraseo Logo" className="footer-logo" />
          <span className="footer-title">Parafraseo</span>
          <p className="footer-desc">
            Parafraseo.co helps you paraphrase texts<br />
            quickly and naturally, preserving the original meaning.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-links-title">Links</div>
          <a href="/about" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Terms and conditions</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copyright">© 2025 Parafraseo.co</span>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="X"><FaXTwitter /></a>
          <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
        </div>
      </div>
    </footer>
  );
} 