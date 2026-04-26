import { useTranslation } from "react-i18next";
import "../Styles/About.css";
import { Helmet } from "react-helmet";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("About.pageTitle")} - ☕ CoffeeShop</title>
      </Helmet>

      <div className="about-page">

        {/* 🔥 HERO SPLIT */}
        <div className="about-hero-split">
          <div className="hero-left">
            <h1>{t("About.title")}</h1>
            <p>{t("About.subtitle")}</p>
          </div>

          <div className="hero-right">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" />
          </div>
        </div>

        <div className="about-stats">
          <div>
            <h3>10K+</h3>
            <p>{t("About.stat1")}</p>
          </div>
          <div>
            <h3>15+</h3>
            <p>{t("About.stat2")}</p>
          </div>
          <div>
            <h3>4.9⭐</h3>
            <p>{t("About.stat3")}</p>
          </div>
        </div>

        <div className="about-section">
          <h2>{t("About.storyTitle")}</h2>
          <p>{t("About.text")}</p>
        </div>


        <div className="timeline">
          <h2>{t("About.timelineTitle")}</h2>

          <div className="timeline-wrapper">

            <div className="timeline-item left">
              <div className="timeline-content">
                <span className="year">2020</span>
                <p>{t("About.time1")}</p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <span className="year">2022</span>
                <p>{t("About.time2")}</p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <span className="year">2024</span>
                <p>{t("About.time3")}</p>
              </div>
            </div>

          </div>
        </div>


        <div className="values-section">
          <h2>{t("About.valuesTitle")}</h2>

          <div className="values-grid">
            <div className="value-box">☕ {t("About.value1")}</div>
            <div className="value-box">🌱 {t("About.value2")}</div>
            <div className="value-box">🤝 {t("About.value3")}</div>
          </div>
        </div>


        <div className="team-section">
          <h2>{t("About.teamTitle")}</h2>

          <div className="team-grid">
            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" />
              <h4>Əli</h4>
              <p>{t("About.role1")}</p>
            </div>

            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" />
              <h4>Elmira</h4>
              <p>{t("About.role2")}</p>
            </div>

            <div className="team-card">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" />
              <h4>Cavid</h4>
              <p>{t("About.role3")}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
