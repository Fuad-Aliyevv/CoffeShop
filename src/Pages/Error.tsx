import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../Styles/Error.css";

export default function Error() {
  const { t } = useTranslation();

  return (
    <div className="error-page">
      <div className="error-box">

        <h1 className="error-code">404</h1>

        <h2 className="error-title">
          {t("Error.title")}
        </h2>

        <p className="error-text">
          {t("Error.text")}
        </p>

        <Link to="/" className="error-btn">
          {t("Error.btn")}
        </Link>

      </div>
    </div>
  );
}
