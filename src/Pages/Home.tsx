import { useTranslation } from "react-i18next";
import "../Styles/Home.css"

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home">


      <div className="hero">
        <h1>{t("Home.heroTitle")}</h1>
        <p>{t("Home.heroText")}</p>
      </div>


      <h2 className="section-title">{t("Home.popular")}</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 text-center">☕ Latte</div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-center">☕ Cappuccino</div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 text-center">☕ Espresso</div>
        </div>
      </div>


      <div className="mt-5">
        <h2 className="section-title">{t("Home.about")}</h2>
        <p>{t("Home.aboutText")}</p>
      </div>


      <div className="mt-5 text-center">
        <h2 className="section-title">{t("Home.why")}</h2>

        <div className="row mt-3">
          <div className="col why-box">☕ {t("Home.fresh")}</div>
          <div className="col why-box">🚚 {t("Home.delivery")}</div>
          <div className="col why-box">⭐ {t("Home.quality")}</div>
        </div>
      </div>


      <div className="cta">
        <h3>{t("Home.ctaTitle")}</h3>
        <button>{t("Home.ctaBtn")}</button>
      </div>

    </div>
  );
}


