import { useTranslation } from "react-i18next";
import "./FooterCTA.css";
import { Link } from "react-router-dom";

export default function FooterCTA() {
  const { t } = useTranslation();

  return (
    <div className="footer-cta">

      <div className="footer-cta-content">
        <h2>{t("FooterCTA.title")}</h2>
        <p>{t("FooterCTA.text")}</p>

        
        <Link to="/menu" className="cta-link">
          {t("FooterCTA.link")}
        </Link>
      </div>

    </div>
  );
}