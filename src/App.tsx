import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  );
}