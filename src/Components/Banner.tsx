import { useTranslation } from "react-i18next";
import "./Banner.css";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className="banner">
      <div className="overlay">
        <h1>{t("banner.title")}</h1>
        <p>{t("banner.subtitle")}</p>
        <button className="btn btn-warning">
          {t("banner.button")}
        </button>
      </div>
    </div>
  );
}