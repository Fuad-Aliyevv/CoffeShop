import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const currentLang = i18n.language?.slice(0, 2) || "az";

  const flags: any = {
    az: "🇦🇿",
    en: "🇬🇧",
    ru: "🇷🇺",
  };

  return (
    <div className="lang-wrapper">

      <button
        className="lang-btn"
        onClick={() => setOpen(!open)}
      >
        {flags[currentLang]} {currentLang.toUpperCase()}
      </button>


      {open && (
        <div className="lang-dropdown">
          <div onClick={() => changeLanguage("az")}> AZ</div>
          <div onClick={() => changeLanguage("en")}> EN</div>
          <div onClick={() => changeLanguage("ru")}> RU</div>
        </div>
      )}
    </div>
  );
}