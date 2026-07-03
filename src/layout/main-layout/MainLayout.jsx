import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../hero/Hero.jsx";
import FeedbackTool from "../../components/feedback/FeedbackTool.jsx";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const showHero = location.pathname === "/";

  return (
    <>
      <Navbar />
      {showHero && <Hero />}
      <Outlet />
      <Footer />
      <FeedbackTool />
    </>
  );
};

export default MainLayout;
