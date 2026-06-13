import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "../Styles/Contact.css";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("Contact.pageTitle")} - ☕ CoffeeShop
        </title>
        <meta
          name="description"
          content={t("Contact.subtitle")}
        />
      </Helmet>
      <div className="contact-page">
        <section className="contact-hero">
          <h1> {t("Contact.title")} </h1>
          <p> {t("Contact.subtitle")}</p>
        </section>
        <section className="contact-grid">
          <div className="contact-card">
            <span>📍</span>
            <h3>{t("Contact.address")}</h3>
            <p>{t("Contact.addressText")}</p>
          </div>
          <div className="contact-card">


            <span>📞</span>


            <h3>
              {t("Contact.phone")}
            </h3>


            <p>
              {t("Contact.phoneText")}
            </p>
          </div>

          <div className="contact-card">

            <span>⏰</span>

            <h3>
              {t("Contact.hours")}
            </h3>


            <p>
              {t("Contact.hoursText")}
            </p>


          </div>


        </section>









        <section className="contact-form-section">



          <div className="contact-text">


            <h2>
              {t("Contact.formTitle")}
            </h2>


            <p>
              {t("Contact.formText")}
            </p>



          </div>





          <form>



            <input

              type="text"

              placeholder={
                t("Contact.name")
              }

            />




            <input

              type="email"

              placeholder={
                t("Contact.email")
              }

            />





            <input

              type="text"

              placeholder={
                t("Contact.subject")
              }

            />





            <textarea

              placeholder={
                t("Contact.message")
              }

            />





            <button
              type="submit"
            >

              {t("Contact.send")}


            </button>



          </form>



        </section>


        <section className="map">


          <iframe

            src="https://maps.google.com/maps?q=Baku&t=&z=13&ie=UTF8&iwloc=&output=embed"

            loading="lazy"

            title="CoffeeShop location"

          >

          </iframe>


        </section>




      </div>


    </>

  );

}