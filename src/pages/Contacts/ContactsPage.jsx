import "./ContactsPage.css";
import ContactsComponent from "../../components/Footer/Contacts/ContactsComponent";

function ContactsPage() {
  return (
    <>
      <div className="contacts block">
        <h1>CONTACTS</h1>
        <p>Ignė Vikorija Bagdonaitė</p>
      </div>
      <ContactsComponent />
    </>
  );
}

export default ContactsPage;
