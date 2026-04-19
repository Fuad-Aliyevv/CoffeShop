import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import FooterCta from "../FooterCta/FooterCta"



export default function MainLayout() {
  return (
    <>
   <Header/>
   <Banner/>

      <main className="container mt-4">
        <Outlet />
      </main>
    <FooterCta/>   
      <Footer/>
    </>
  );
}