
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../Styles/Menu.css";
import { Helmet } from "react-helmet";

type Item = {
  id: number;
  name: string;
  price: string;
  category: string;
  img: string;
};

export default function Menu() {
  const { t } = useTranslation();

  const [category, setCategory] = useState("all");

  const items: Item[] = [
    {
      id: 1,
      name: t("Menu.espresso"),
      price: "$3",
      category: "coffee",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
    },
    {
      id: 2,
      name: t("Menu.cappuccino"),
      price: "$4",
      category: "coffee",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
      id: 3,
      name: t("Menu.latte"),
      price: "$4.5",
      category: "coffee",
      img: "https://images.unsplash.com/photo-1498804103079-a6351b050096"
    },
    {
      id: 4,
      name: t("Menu.cake"),
      price: "$5",
      category: "dessert",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
    }
  ];

  const filtered =
    category === "all"
      ? items
      : items.filter((i) => i.category === category);

  return (
    <>
      <Helmet>
        <title>{t("Menu.pageTitle")} - ☕ CoffeeShop</title>
      </Helmet>

      <div className="menu-page">

        <h1>{t("Menu.title")}</h1>


        <div className="menu-filter">
          <button onClick={() => setCategory("all")}>
            {t("Menu.all")}
          </button>
          <button onClick={() => setCategory("coffee")}>
            {t("Menu.coffee")}
          </button>
          <button onClick={() => setCategory("dessert")}>
            {t("Menu.dessert")}
          </button>
        </div>

      
        <div className="menu-grid">
          {filtered.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.img} />

              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}