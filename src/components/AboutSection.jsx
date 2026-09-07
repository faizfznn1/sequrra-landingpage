import FinansialImage from "../assets/Finansial.jpg";

const impacts = [
  {
    title: "Kerugian Finansial",
    description: "Omzet turun drastis akibat produk palsu beredar di pasar.",
    icon: null,
  },
  {
    title: "Reputasi Brand",
    description: "Kepercayaan pelanggan sulit dibangun kembali setelah hilang.",
    // icon: reputationIcon,
  },
  {
    title: "Konsumen Dirugikan",
    description: "Konsumen menjadi korban dan brand ikut disalahkan.",
    // icon: harmedConsumerIcon,
  },
  {
    title: "Pangsa Pasar",
    description:
      "Produk palsu merebut pangsa pasar yang seharusnya milik Anda.",
  },
];

function AboutSection() {
  return (
    <section
      id="tentang-kami"
      className="about-section"
      aria-labelledby="about-title"
    >
      <div className="about-section__intro">
        <div className="about-section__copy">
          <span className="section-label">Tentang Sequrra</span>
          <h2 id="about-title">Verifikasi keaslian dalam satu scan.</h2>
        </div>
        <div className="about-section__copy about-section__copy--description">
          <p>
            SEQURRA hadir sebagai solusi keamanan produk berbasis teknologi
            encrypted QR code dan microtext. Konsumen cukup scan stiker untuk
            memverifikasi keaslian produk secara instan.
          </p>
          <div className="about-section__tags" aria-label="Teknologi Sequrra">
            <span>Encrypted QR</span>
            <span>Microtext</span>
            <span>Verifikasi App</span>
          </div>
        </div>
      </div>

      <div className="about-section__impact-layout">
        <div className="about-section__visual">
          <img src={FinansialImage} alt="Contoh stiker keamanan Sequrra" />
          <div className="about-section__visual-caption">
            <strong>Kerugian Finansial</strong>
            <span>
              Omzet turun drastis akibat produk palsu beredar di pasar.
            </span>
          </div>
        </div>

        <div className="about-section__impacts">
          <div className="about-section__impacts-heading">
            <span className="section-label section-label--dark">
              Risiko Pemalsuan
            </span>
            <h2>Dampak Pemalsuan Produk</h2>
            <p>
              Produk palsu tidak hanya mencuri pendapatan, mereka merusak
              hubungan Anda dengan pelanggan.
            </p>
          </div>

          <div className="about-section__impact-list">
            {impacts.slice(1).map((impact) => (
              <article className="about-impact-card" key={impact.title}>
                {/* <img src={impact.icon} alt="" /> */}
                <div>
                  <h3>{impact.title}</h3>
                  <p>{impact.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
