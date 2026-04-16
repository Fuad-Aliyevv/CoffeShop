import { useTranslation } from "react-i18next";
import "../Styles/Home.css";
import { Helmet } from "react-helmet";
import TestimonialsSlider from "../Components/TestimonialsSlider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showTop, setShowTop] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("Home.pageTitle")} - ☕ CoffeeShop</title>
        <meta name="description" content={t("Home.heroText")} />
      </Helmet>

      <div className="home">


        <div className="hero">
          <h1 className="hero-title">{t("Home.heroTitle")}</h1>
          <p>{t("Home.heroText")}</p>

          <button
            className="cta-btn mt-3"
            onClick={() => navigate("/menu")}
          >
            {t("Home.ctaBtn")}
          </button>
        </div>


        <div className="hero-video-section">
          <div className="hero-video-wrapper">
            <video autoPlay loop muted className="hero-video">
              <source
                src="https://cdn.coverr.co/videos/coverr-coffee-beans-clip-5176/1080p.mp4"
                type="video/mp4"
              />
            </video>

            <div className="hero-overlay">
              <h2>{t("Home.heroTitle")}</h2>

              <button
                className="cta-btn"
                onClick={() => navigate("/menu")}
              >
                {t("Home.ctaBtn")}
              </button>
            </div>
          </div>
        </div>

        <div className="special">
          🔥 {t("Home.special")}
        </div>

        <div className="stats">
          <div><h3>10K+</h3><p>{t("Home.customers")}</p></div>
          <div><h3>4.9⭐</h3><p>{t("Home.rating")}</p></div>
          <div><h3>24/7</h3><p>{t("Home.service")}</p></div>
        </div>


        <div className="about-section section light">
          <h2>{t("Home.about")}</h2>
          <p>{t("Home.aboutText")}</p>
        </div>

        <div className="why section white">
          <h2>{t("Home.why")}</h2>

          <div className="why-grid">
            <div className="why-box">☕ {t("Home.fresh")}</div>
            <div className="why-box">🚚 {t("Home.delivery")}</div>
            <div className="why-box">⭐ {t("Home.quality")}</div>
          </div>
        </div>


        <div className="steps section light">
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

        <TestimonialsSlider />

        <div className="cta">
          <h3>{t("Home.ctaTitle")}</h3>

          <button
            className="cta-btn"
            onClick={() => navigate("/menu")}
          >
            {t("Home.ctaBtn")}
          </button>
        </div>

        {showTop && (
          <button
            className="top-btn"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            ↑
          </button>
        )}

      </div>
    </>
  );
}