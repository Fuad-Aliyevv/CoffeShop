import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "../Styles/Menu.css"
import menuData from "../data/menuData.ts"

export default function Menu() {
  const { t } = useTranslation();

  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? menuData
      : menuData.filter(
          (item) => item.category === category
        );

  return (
    <>
      <Helmet>
        <title>{t("Menu.pageTitle")} - ☕ CoffeeShop</title>

        <meta
          name="description"
          content="CoffeeShop Menu"
        />
      </Helmet>

      <div className="menu-page">

        <div className="menu-hero">

          <h1>{t("Menu.title")}</h1>

          <p>{t("Menu.subtitle")}</p>

        </div>

    
        <div className="menu-filter">

          <button
            className={category === "all" ? "active" : ""}
            onClick={() => setCategory("all")}
          >
            {t("Menu.all")}
          </button>

          <button
            className={category === "coffee" ? "active" : ""}
            onClick={() => setCategory("coffee")}
          >
            {t("Menu.coffee")}
          </button>

          <button
            className={category === "dessert" ? "active" : ""}
            onClick={() => setCategory("dessert")}
          >
            {t("Menu.dessert")}
          </button>

        </div>

        <div className="menu-grid">

          {filtered.map((item) => (

            <div
              key={item.id}
              className="menu-card"
            >

              <div className="menu-image-wrapper">

                <img
                  src={item.img}
                  alt={item.name}
                />

                <span className="menu-price">
                  {item.price}
                </span>

              </div>

              <div className="menu-info">

                <h3>{item.name}</h3>

                <p className="menu-desc">
                  {item.desc}
                </p>

                <button className="menu-btn">
                  {t("Menu.orderBtn")}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}