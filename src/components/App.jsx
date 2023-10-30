import { useEffect, useRef } from "react";
import { ContactForm, FilterForm, Section, ContactList } from "."
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "store/slices/contactsSlice";

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch()
  const rendersCausedByContacts = useRef(0)

  useEffect(() => {
    if (rendersCausedByContacts.current === 0) {
      const lsContacts = localStorage.getItem('contacts')
      if (lsContacts) {
        dispatch(setContacts(JSON.parse(lsContacts)))
      }
      rendersCausedByContacts.current += 1
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
    //eslint-disable-next-line
  }, [contacts])

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm/>
      </Section>
      <Section title="Contacts">
        <FilterForm />
        <ContactList />
      </Section>
    </div>
  );
}

export default App
