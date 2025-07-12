import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import logoImg from "./parafraseo-logo.png";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Paraphraser", path: "/paraphraser" },
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="navbar-rounded">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="/" onClick={e => {e.preventDefault(); navigate("/");}}>
            <img src={logoImg} alt="Parafraseo Logo" className="navbar-logo-img" />
          </a>
          <span className="logo-text-rounded">Paraphraser</span>
        </div>
        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.path}
              onClick={e => {e.preventDefault(); navigate(link.path);}}
              className={`navbar-link${location.pathname === link.path ? " active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="navbar-contact">
          <button className={`contact-btn-rounded${location.pathname === "/contact" ? " active" : ""}`} onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
} 