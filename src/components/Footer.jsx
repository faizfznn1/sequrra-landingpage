import { Camera, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import logo from "../assets/Sequrra Logo.png";

const pageLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Keunggulan", href: "#keunggulan" },
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.link/snld5l", icon: MessageCircle },
  {
    label: "Instagram",
    href: "https://instagram.com/sequrra.official",
    icon: Camera,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@sequrra.official",
    icon: Music2,
  },
];

function Footer() {
  return (
    <footer id="kontak" className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <a href="#beranda" aria-label="Kembali ke Beranda">
            <img src={logo} alt="Sequrra" />
          </a>
          <p>
            Solusi keamanan produk berbasis encrypted QR dan microtext.
            Dipercaya oleh brand-brand terkemuka di Indonesia.
          </p>
        </div>

        <div className="footer__column">
          <h2>Halaman</h2>
          <nav aria-label="Navigasi footer">
            {pageLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__column footer__contact">
          <h2>Kontak</h2>
          <a
            href="https://maps.google.com/?q=RDTX+Square+Jl.+H.+R.+Rasuna+Said+Jakarta"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={16} strokeWidth={1.25} aria-hidden="true" />
            <span>RDTX Square Lt. 18 Jakarta Selatan, Indonesia</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=6282130312025&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={16} strokeWidth={1.25} aria-hidden="true" />
            <span>+62 821-3031-2025</span>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__socials" aria-label="Media sosial">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={label}>
              <Icon size={16} strokeWidth={1.25} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p>© 2026 SEQURRA by PT. Rahasia Esa Dunia. Hak Cipta Dilindungi</p>
      </div>
    </footer>
  );
}

export default Footer;
