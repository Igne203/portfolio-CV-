import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
import "./Navigation.css";

function NavigationComponent() {
  const location = useLocation();

  return (
    <div className="nav-block">

      <Nav className="nav-links" variant="underline" activeKey={location.pathname}>
        <Nav.Item>
          <Nav.Link href="/" eventKey="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about-me" eventKey="/about-me">
            About me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contacts" eventKey="/contacts">
            Contacts
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavigationComponent;