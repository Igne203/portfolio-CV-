import "./ContactsComponent.css";

function ContactsComponent() {
  return (
    <>
      <div className="contacts-component block">
        <a href="https://www.instagram.com/igne_v_b/">
          <img src="/assets/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/igne.bagdonaite">
          <img src="/assets/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/ign%C4%97-viktorija-bagdonait%C4%97-1a2447328/">
          <img src="/assets/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </>
  );
}

export default ContactsComponent;
