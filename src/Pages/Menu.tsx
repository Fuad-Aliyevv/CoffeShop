import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import "../Styles/Menu.css";
import menuData from "../data/menuData";

import { useCart } from "../Context/CardContext";


type MenuItem = {
  id: number;
  name: string;
  desc: string;
  price: string;
  category: string;
  img: string;
};

export default function Menu() {

  const { t } = useTranslation();

  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const { addToCart } = useCart();


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, []);


  const filtered =
    category === "all"
      ? menuData
      : menuData.filter((item) => item.category === category);

  const handleAddToCart = () => {

    if (!selectedItem) return;

    addToCart(selectedItem);

    setSelectedItem(null);

  };

  return (
    <>
      <Helmet>
        <title>{t("Menu.pageTitle")} - ☕ CoffeeShop</title>
      </Helmet>

      <div className="menu-page">
        <div className="menu-top">

          <div className="menu-hero">
            <h1>{t("Menu.title")}</h1>
            <p>{t("Menu.subtitle")}</p>
          </div>

     

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

        {loading ? (

          <div className="menu-grid">

            {[1, 2, 3, 4].map((i) => (

              <div key={i} className="menu-card skeleton-card">

                <div className="skeleton-image" />
                <div className="skeleton-title" />
                <div className="skeleton-text" />
                <div className="skeleton-btn" />

              </div>

            ))}

          </div>

        ) : (

          <div className="menu-grid">

            {filtered.map((item) => (

              <div key={item.id} className="menu-card">

                <div className="menu-image-wrapper">

                  <img src={item.img} alt={item.name} />

                  <span className="menu-price">
                    {item.price}
                  </span>

                </div>

                <div className="menu-info">

                  <h3>{item.name}</h3>

                  <p className="menu-desc">
                    {item.desc}
                  </p>

                  <button
                    className="menu-btn"
                    onClick={() => addToCart(item)}
                  >
                    {t("Menu.orderBtn")}
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

        {selectedItem && (

          <div
            className="modal-overlay"
            onClick={() => setSelectedItem(null)}
          >

            <div
              className="menu-modal"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={selectedItem.img}
                alt={selectedItem.name}
              />

              <div className="modal-content">

                <h2>{selectedItem.name}</h2>

                <p>{selectedItem.desc}</p>

                <span className="modal-price">
                  {selectedItem.price}
                </span>

                <div className="modal-buttons">

                  <button
                    className="add-cart-btn"
                    onClick={handleAddToCart}
                  >
                    🛒 Səbətə əlavə et
                  </button>

                  <button
                    className="close-btn"
                    onClick={() => setSelectedItem(null)}
                  >
                    Bağla
                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>
    </>
  );
}