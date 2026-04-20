import "./ContactsPage.css";
import ContactsComponent from "../../components/Footer/Contacts/ContactsComponent";

function ContactsPage() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <div className="contacts block">
        <h1>CONTACTS</h1>
        <div className="contacts-content">
          <img src={`${baseUrl}assets/portret1.jpg`} alt="Portfolio portrait" />
          <p>Feel free to reach out!</p>
        </div>
      </div>
      <ContactsComponent />
    </>
  );
}

export default ContactsPage;
