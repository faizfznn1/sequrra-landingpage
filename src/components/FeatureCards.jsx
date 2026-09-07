import dashboardImage from "../assets/Dashboard.png";
import mobileAppsImage from "../assets/Mobile Apps.png";
import stickerImage from "../assets/Sticker.png";

const features = [
  {
    title: "Stiker SQR",
    description:
      "Banyak jenis varian Stiker dengan QR terenkripsi dan microtext untuk autentikasi produk.",
    image: stickerImage,
  },
  {
    title: "SQR App",
    description:
      "Aplikasi verifikasi untuk konsumen scan dan konfirmasi keaslian dalam detik.",
    image: mobileAppsImage,
  },
  {
    title: "Data Dashboard",
    description:
      "Dashboard brand owner untuk memantau scan, lokasi, dan data autentikasi.",
    image: dashboardImage,
  },
];

function FeatureCards() {
  return (
    <section
      id="fitur"
      className="feature-cards"
      aria-labelledby="feature-cards-title"
    >
      <span className="section-label">Fitur</span>
      <h2 id="feature-cards-title">
        Keamanan total untuk
        <br />
        setiap produk Anda
      </h2>

      <div className="feature-cards__grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-card__image">
              <img src={feature.image} alt="" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
