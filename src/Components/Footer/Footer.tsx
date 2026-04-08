import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
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
            <li>
              <NavLink to="/" className="footer-link">
                {t("footer.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="footer-link">
                {t("footer.menu")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">
                {t("footer.contact")}
              </NavLink>
            </li>
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