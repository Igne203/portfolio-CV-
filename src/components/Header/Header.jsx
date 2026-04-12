import "./Header.css";
import NavigationComponent from "./Navigation/Navigation";

function Header() {
  return (
    <header className="site-header">
      <h3 className="header-name">
        Ignė Viktorija <br /> Bagdonaitė
      </h3>
      <NavigationComponent />
    </header>
  );
}

export default Header;