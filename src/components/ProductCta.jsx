import { ArrowRight } from "lucide-react";
import dashboardImage from "../assets/Dashboard.png";

function ProductCta() {
  return (
    <section className="product-cta" aria-labelledby="product-cta-title">
      <div className="product-cta__content">
        <h2 id="product-cta-title">Lindungi Produk Anda Sekarang.</h2>
        <p>
          Satu langkah untuk memastikan keaslian produk Anda di seluruh jaringan
          distribusi.
        </p>
        <a
          className="product-cta__button"
          target="_blank"
          href="https://wa.link/snld5l"
        >
          Hubungi Kami via WhatsApp
          <ArrowRight size={16} strokeWidth={1.25} aria-hidden="true" />
        </a>
      </div>
      <div className="product-cta__visual" aria-hidden="true">
        <img src={dashboardImage} alt="" />
      </div>
    </section>
  );
}

export default ProductCta;
