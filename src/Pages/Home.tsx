import { useTranslation } from "react-i18next";
import "../Styles/Home.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="hero">
   
        <h1>{t("Home.heroTitle")}</h1>
        <p>{t("Home.heroText")}</p>
        <button className="cta-btn mt-3">
          {t("Home.ctaBtn")}
        </button>
      </div>


      <div className="special">
        🔥 {t("Home.special")}
      </div>

      <div className="stats">
        <div>
          <h3>10K+</h3>
          <p>{t("Home.customers")}</p>
        </div>
        <div>
          <h3>4.9⭐</h3>
          <p>{t("Home.rating")}</p>
        </div>
        <div>
          <h3>24/7</h3>
          <p>{t("Home.service")}</p>
        </div>
      </div>

      <div className="about-section">
        <h2>{t("Home.about")}</h2>
        <p>{t("Home.aboutText")}</p>
      </div>


      <div className="why">
        <h2>{t("Home.why")}</h2>
        <div className="row mt-3">
          <div className="col why-box">☕ {t("Home.fresh")}</div>
          <div className="col why-box">🚚 {t("Home.delivery")}</div>
          <div className="col why-box">⭐ {t("Home.quality")}</div>
        </div>
      </div>


      <div className="steps">
        <h2>{t("Home.stepsTitle")}</h2>

        <div className="steps-container">
          <div className="step">
            <div className="circle">1</div>
            <p>{t("Home.step1")}</p>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <p>{t("Home.step2")}</p>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <p>{t("Home.step3")}</p>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="testimonial-visual">

          <div className="testimonial-item">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="testimonial-item">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />

            <div className="stars">⭐⭐⭐⭐☆</div>
          </div>

          <div className="testimonial-item">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" />

            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>

        </div>
      </div>

      <div className="cta">
        <h3>{t("Home.ctaTitle")}</h3>
        <button className="cta-btn">
          {t("Home.ctaBtn")}
        </button>
      </div>

    </div>
  );
}
