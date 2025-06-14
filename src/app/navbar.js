"use client";

import { useState } from "react";
import navbar from "../css/navbar.module.css";
import sidebar from "../css/sidebar.module.css";

export default function Navbar({ isAdmin }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const adminLinks = [
    { href: "#continents", label: "Continents" },
    { href: "#countries", label: "Countries" },
    { href: "#states", label: "States" },
    { href: "#cities", label: "Cities" },
  ];

  const userLinks = [
    { href: "#docs", label: "Docs" },
    { href: "#apikey", label: "API Key" },
    { href: "#donate", label: "Donate" },
    { href: "#faq", label: "FAQ's" },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <>
      <header className={navbar.header}>
        <nav className={navbar.nav}>
          
          <ul className={navbar.list_nav}>
            <li className={navbar.nav_list_item}>
              <button className={sidebar.hamburger} onClick={toggleSidebar}>
                ☰
            </button>
            </li>
            <li className={navbar.nav_list_item}>
              <a className={navbar.nav_logo}>Regionum API</a>
            </li>
            {links.map((link, idx) => (
              <li key={idx} className={navbar.nav_list_item}>
                <a className={navbar.nav_link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Sidebar */}
      <div className={`${sidebar.sidebar} ${isOpen ? sidebar.open : ""}`}>
        {links.map((link, idx) => (
          <a key={idx} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}