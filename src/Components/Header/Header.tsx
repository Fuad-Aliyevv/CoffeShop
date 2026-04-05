import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
 
        <Link className="navbar-brand" to="/">
          ☕ CoffeeShop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }>
                {t("home")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }>
                {t("about")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/menu" className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }>
                {t("menu")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }>
                {t("contact")}
              </NavLink>
            </li>

          </ul>

          <div className="d-flex align-items-center ms-3">
            <LocaleSwitcher />
          </div>
        </div>

      </div>
    </nav>
  );
}