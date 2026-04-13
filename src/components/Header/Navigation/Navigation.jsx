import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function NavigationComponent() {
  const location = useLocation();
  const basePath = import.meta.env.BASE_URL;
  const currentPath = location.pathname.startsWith(basePath)
    ? location.pathname.slice(basePath.length - 1)
    : location.pathname;

  return (
    <div className="nav-block">

      <Nav className="nav-links" variant="underline" activeKey={currentPath}>
        <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about-me" eventKey="/about-me">
            About me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contacts" eventKey="/contacts">
            Contacts
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavigationComponent;