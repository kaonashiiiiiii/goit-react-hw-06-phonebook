import { useEffect, useMemo, useRef } from "react";
import { ContactForm, FilterForm, Section, ContactList } from "."
import { useDispatch, useSelector } from "react-redux";
import { setContacts, contactDeleted, contactCreated } from "store/slices/contactsSlice";

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filter)
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

  function deleteContact (id) {
    dispatch(contactDeleted(id))
  }

  function checkContact (contact) {
    const isContantExist = contacts.find(item => item.name === contact.name)
    if (isContantExist) {
      alert (`${contact.name} is already in contacts`)
      return false
    }
    return true
  }

  function addContact (contact) {
    if (!checkContact(contact)) return
    dispatch(contactCreated(contact))
  }

  const filteredContacts = useMemo(() => {
    if(!filter) return contacts
    return contacts.filter(contact => {
      if (contact.name.toLowerCase().includes(filter.toLowerCase())) return true
      return false
    })
  }, [filter, contacts])

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm addContact={addContact}/>
      </Section>
      <Section title="Contacts">
        <FilterForm />
        <ContactList contacts={filteredContacts} deleteContact={deleteContact}/>
      </Section>
    </div>
  );
}

export default App
