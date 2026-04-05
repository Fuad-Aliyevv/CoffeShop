import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner";

export default function MainLayout() {
  return (
    <>
   <Header/>
   <Banner/>

      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
}