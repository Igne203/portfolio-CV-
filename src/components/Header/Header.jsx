import "./Header.css";
import NavigationComponent from "./Navigation/Navigation";

function Header() {
  return (
    <header className="site-header">
      <p className="header-name">
        Ignė Viktorija <br /> Bagdonaitė
      </p>
      <NavigationComponent />
    </header>
  );
}

export default Header;