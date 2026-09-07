import { ArrowRight, MessageCircle } from "lucide-react";
import logo from "../assets/Sequrra Logo.png";

const whatsappUrl =
  "https://wa.me/6282130312025?text=Halo%20Sequrra,%20saya%20memiliki%20kebutuhan%20urgent%20terkait%20website.";

function MaintenancePage() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-page__glow" aria-hidden="true" />
      <div className="maintenance-page__content">
        <a className="maintenance-page__brand" href="/" aria-label="Sequrra">
          <img src={logo} alt="Sequrra" />
        </a>

        <span className="maintenance-page__eyebrow">Sedang ditingkatkan</span>
        <h1>Website sedang dalam maintenance.</h1>
        <p>
          Kami sedang melakukan beberapa peningkatan agar pengalaman Anda di
          Sequrra menjadi lebih baik. Silakan kembali beberapa saat lagi.
        </p>

        <a
          className="maintenance-page__button"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={16} strokeWidth={1.25} aria-hidden="true" />
          Hubungi WhatsApp jika Sangat Penting
          <ArrowRight size={16} strokeWidth={1.25} aria-hidden="true" />
        </a>

        <span className="maintenance-page__status">
          <span aria-hidden="true" />
          Sistem sedang diperbarui
        </span>
      </div>
    </main>
  );
}

export default MaintenancePage;
