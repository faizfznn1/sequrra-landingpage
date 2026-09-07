import { useState } from "react";
import { ArrowRight } from "lucide-react";
import varianImage from "../assets/Varian.png";
import mobileAppsImage from "../assets/Card Mobile.png";

const advantages = [
  {
    title: "Pilih Varian Keamanan Sesuai Kemasan Anda",
    description:
      "Setiap produk memiliki kebutuhan material dan tingkat proteksi yang berbeda.",
    action: "Mulai Sekarang",
    image: varianImage,
    imageAlt: "Varian keamanan produk Sequrra",
  },
  // {
  //   title: "Kenapa Produk Anda Wajib Dilindungi?",
  //   description:
  //     "Pemalsuan bukan sekadar kehilangan penjualan, tetapi ancaman kelangsungan bisnis Anda.",
  //   action: "Coming Soon",
  //   image: stickerImage,
  //   imageAlt: "Stiker keamanan produk Sequrra",
  // },
  {
    title: "Solusi Proteksi untuk Berbagai Sektor",
    description:
      "Disesuaikan dengan standar regulasi dan rantai pasok industri Anda.",
    action: "Mulai Sekarang",
    image: mobileAppsImage,
    imageAlt: "Aplikasi verifikasi produk Sequrra",
  },
];

function AdvantagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAdvantage = advantages[activeIndex];

  return (
    <section
      id="keunggulan"
      className="advantages-section"
      aria-labelledby="advantages-title"
    >
      <span className="section-label">Mengapa Kami</span>
      <div className="advantages-section__layout">
        <div className="advantages-section__content">
          {advantages.map((advantage, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                className={`advantage-card${isActive ? " advantage-card--active" : ""}`}
                key={advantage.title}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
              >
                <span className="advantage-card__title">{advantage.title}</span>
                <span className="advantage-card__description">
                  {advantage.description}
                </span>
                <span className="advantage-card__action">
                  {advantage.action}
                  {advantage.action !== "Coming Soon" && (
                    <ArrowRight
                      size={16}
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <div className="advantages-section__visual" aria-live="polite">
          <img
            key={activeAdvantage.image}
            src={activeAdvantage.image}
            alt={activeAdvantage.imageAlt}
          />
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;
