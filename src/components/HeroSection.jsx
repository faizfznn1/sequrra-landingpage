import { ArrowRight } from "lucide-react";
import heroImage from "../assets/Hero Image.png";
import akusaraLogo from "../assets/Logo Clients/Akusara Billiard.svg";
import aimLogo from "../assets/Logo Clients/Logo AIM.svg";
import bgManaLogo from "../assets/Logo Clients/Logo BG MANA COFFEE.webp";
import ffiLogo from "../assets/Logo Clients/Logo FFI.svg";
import foomLogo from "../assets/Logo Clients/Logo Foom.svg";
import gfRacingLogo from "../assets/Logo Clients/Logo GF RACING.webp";
import herpilLogo from "../assets/Logo Clients/Logo HERPIL.webp";
import jeffDistributionLogo from "../assets/Logo Clients/Logo JEFF DISTRIBUTION.png";
import noobPadelLogo from "../assets/Logo Clients/Logo NOOB PADEL.webp";
import peratinLogo from "../assets/Logo Clients/Logo PERATIN.webp";
import rolinLogo from "../assets/Logo Clients/Logo Rolin 1.svg";
import specsLogo from "../assets/Logo Clients/Logo Specs.svg";
import wattledLogo from "../assets/Logo Clients/Logo WATTLED.webp";

const trustedBrands = [
  { name: "Akusara Billiard", image: akusaraLogo },
  { name: "AIM", image: aimLogo },
  { name: "BG Mana Coffee", image: bgManaLogo },
  { name: "FFI", image: ffiLogo },
  { name: "Foom", image: foomLogo },
  { name: "GF Racing", image: gfRacingLogo },
  { name: "Herpil", image: herpilLogo },
  { name: "Jeff Distribution", image: jeffDistributionLogo },
  { name: "Noob Padel", image: noobPadelLogo },
  { name: "Peratin", image: peratinLogo },
  { name: "Rolin", image: rolinLogo },
  { name: "Specs", image: specsLogo },
  { name: "Wattled", image: wattledLogo },
];

function HeroSection() {
  return (
    <section id="beranda" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__intro">
        <span className="hero-section__badge">
          <strong>Baru</strong>
          <span>Anti-Counterfeit #1 di Indonesia</span>
        </span>
        <h1 id="hero-title">
          Lindungi Brand Anda dari
          <br />
          Pemalsuan dengan <span>QR Microtext</span>
        </h1>
        <p>
          SEQURRA menghadirkan sticker QR terenkripsi dengan microtext &amp;
          variable data — lapisan keamanan produk yang sulit dipalsukan,
          <br className="hero-section__desktop-break" />
          mudah diverifikasi dalam hitungan detik.
        </p>
        <div className="hero-section__actions">
          <a
            className="hero-section__button hero-section__button--primary"
            href="#fitur"
          >
            Lihat Fitur
            <ArrowRight size={16} strokeWidth={1.25} aria-hidden="true" />
          </a>
          <a
            className="hero-section__button hero-section__button--secondary"
            href="#kontak"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>

      <div className="hero-section__dashboard">
        <img src={heroImage} alt="Dashboard keamanan brand Sequrra" />
      </div>

      <div className="hero-section__trust">
        <p>Dipercaya oleh berbagai brand terkemuka</p>
        <div
          className="hero-section__carousel"
          aria-label="Brand yang mempercayai Sequrra"
        >
          <div className="hero-section__brands">
            {[...trustedBrands, ...trustedBrands].map((brand, index) => (
              <span
                className="hero-section__brand"
                key={`${brand.name}-${index}`}
              >
                <img src={brand.image} alt={brand.name} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
