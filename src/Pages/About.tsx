import { useTranslation } from "react-i18next";
import "../Styles/About.css";
import { Helmet } from "react-helmet";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("About.pageTitle")} - ☕ CoffeeShop</title>
        <meta name="description" content={t("About.text")} />
      </Helmet>

      <div className="about-page">

        <div className="about-hero">
          <h1>{t("About.title")}</h1>
          <p>{t("About.subtitle")}</p>
        </div>

 
        <div className="about-section">
          <div className="about-text">
            <h2>{t("About.storyTitle")}</h2>
            <p>{t("About.text")}</p>
          </div>

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" />
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

