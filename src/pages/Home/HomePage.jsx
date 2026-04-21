import HeadingPage from "../Heading/HeadingPage";
import "./HomePage.css";
import AboutPageMini from "../About/AboutPageMini";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
  return (
    <>
      <HeadingPage />
      <AboutPageMini />
      <Footer />
    </>
  );
}

export default HomePage;
