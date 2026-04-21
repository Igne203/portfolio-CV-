import "./ContactsPage.css";
import ContactsComponent from "../../components/Footer/Contacts/ContactsComponent";

function ContactsPage() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <div className="contacts block">
        <div className="contacts-content">
          <h1>CONTACTS</h1>
          <p>Feel free to reach out!</p>
        </div>

          <img src={`${baseUrl}assets/portret1.jpg`} alt="Portfolio portrait" />

      </div>
      <ContactsComponent />
    </>
  );
}

export default ContactsPage;
