import { useState } from "react";
import Contact from "./Contact/Contact";
// import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import initialContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} />
    </div>
  );
}

export default App;
