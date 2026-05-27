import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LocaleSwitcher from "./LocaleSwitcher";
import { useCart } from "../../Context/CardContext";

export default function Header() {

  const { t } = useTranslation();


  const { cart } = useCart();

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">

          {/* LOGO */}
          <Link
            className="navbar-brand"
            to="/"
          >
            ☕ CoffeeShop
          </Link>

          {/* MOBILE BTN */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >

            {/* LINKS */}
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-link" +
                    (isActive
                      ? " active"
                      : "")
                  }
                >
                  {t("home")}
                </NavLink>

              </li>

              <li className="nav-item">

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-link" +
                    (isActive
                      ? " active"
                      : "")
                  }
                >
                  {t("about")}
                </NavLink>

              </li>

              <li className="nav-item">

                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    "nav-link" +
                    (isActive
                      ? " active"
                      : "")
                  }
                >
                  {t("menu")}
                </NavLink>

              </li>

              <li className="nav-item">

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link" +
                    (isActive
                      ? " active"
                      : "")
                  }
                >
                  {t("contact")}
                </NavLink>

              </li>

            </ul>

            {/* RIGHT */}
            <div className="d-flex align-items-center gap-3 ms-3">

              {/* CART */}
              <div
                className="nav-cart"
                data-bs-toggle="offcanvas"
                data-bs-target="#cartCanvas"
              >
                🛒 {cart.length}
              </div>

              {/* LANGUAGE */}
              <LocaleSwitcher />

            </div>

          </div>

        </div>

      </nav>

      {/* CART SIDEBAR */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="cartCanvas"
      >

        <div className="offcanvas-header">

          <h5>Səbət</h5>

          <button
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>

        </div>

        <div className="offcanvas-body">

          {cart.length === 0 ? (

            <p>Səbət boşdur ☕</p>

          ) : (

            <>
              {cart.map((item) => (

                <div
                  key={item.id}
                  className="cart-item"
                >

                  <img
                    src={item.img}
                    alt={item.name}
                  />

                  <div>

                    <h6>{item.name}</h6>

                    <p>{item.price}</p>

                  </div>

                </div>

              ))}

              <button className="checkout-btn">
                Sifarişi tamamla
              </button>
            </>
          )}

        </div>

      </div>

    </>
  );
}