const steps = [
  {
    number: "1",
    title: "Pasang Stiker",
    description:
      "Brand owner memasang Stiker SQR ke produk pada tahap akhir produksi.",
  },
  {
    number: "2",
    title: "Scan QR",
    description:
      "Konsumen scan stiker menggunakan aplikasi SEQURRA dari smartphone mereka.",
  },
  {
    number: "3",
    title: "Produk Terverifikasi",
    description:
      "Keaslian produk langsung terkonfirmasi, dengan jejak data yang tercatat.",
  },
];

function ProcessSteps() {
  return (
    <section
      id="cara-kerja"
      className="process-steps"
      aria-labelledby="process-steps-title"
    >
      <span className="section-label">Cara Kerja</span>
      <h2 id="process-steps-title">
        Tiga langkah dari produksi ke
        <br />
        perlindungan.
      </h2>

      <div className="process-steps__grid">
        {steps.map((step) => (
          <article className="process-step" key={step.number}>
            <span className="process-step__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessSteps;
