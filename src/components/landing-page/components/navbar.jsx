"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Programs",
    "Technology",
    "Trainers",
    "Membership",
    "Contact",
  ];

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top border-bottom border-danger border-opacity-25 transition"
      style={{
        backgroundColor: scrolled ? "rgba(15, 15, 15, 0.95)" : "transparent",
        transition: "0.4s",
        boxShadow: scrolled ? "0 0 20px rgba(255, 59, 59, 0.2)" : "none",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold text-white fs-3"
          href="#home"
          style={{ letterSpacing: "2px" }}
        >
          TITAN<span style={{ color: "#ff3b3b" }}>FORGE</span>
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((item) => (
              <li key={item} className="nav-item">
                <a
                  className="nav-link text-white fw-semibold px-3"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button
                className="btn fw-bold px-4 rounded-0"
                style={{ backgroundColor: "#ff3b3b", color: "#fff" }}
              >
                JOIN NOW
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
