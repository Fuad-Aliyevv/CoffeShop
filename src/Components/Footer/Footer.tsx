import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-content">

      
        <div>
          <h6>{t("footer.aboutTitle")}</h6>
          <p>{t("footer.aboutText")}</p>
        </div>

        <div>
          <h6>{t("footer.links")}</h6>
          <ul>
            <li>{t("footer.home")}</li>
            <li>{t("footer.menu")}</li>
            <li>{t("footer.contact")}</li>
          </ul>
        </div>

   
        <div>
          <h6>{t("footer.contactTitle")}</h6>
          <p>{t("footer.address")}</p>
          <p>{t("footer.phone")}</p>
        </div>

      </div>

      <div className="footer-bottom">
        {t("footer.copy")}
      </div>
    </footer>
  );
}