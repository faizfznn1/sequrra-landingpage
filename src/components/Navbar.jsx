import { useState } from "react";
import logo from "../assets/Sequrra Logo.png";
import { Globe, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Keunggulan", href: "#keunggulan" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#beranda" onClick={closeMenu}>
        <img src={logo} alt="Sequrra" />
      </a>

      <button
        className="navbar__toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar__menu${isMenuOpen ? " navbar__menu--open" : ""}`}>
        <nav
          id="primary-navigation"
          className="navbar__nav"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <label className="navbar__language">
            <Globe size={16} strokeWidth={1.25} />{" "}
            <span className="sr-only">Pilih bahasa</span>
            <select defaultValue="id" aria-label="Pilih bahasa">
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </label>
          <a
            className="navbar__contact"
            target="_blank"
            href="https://wa.link/snld5l"
            onClick={closeMenu}
          >
            Hubungi Kami
            <ArrowRight size={16} strokeWidth={1.25} />{" "}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
