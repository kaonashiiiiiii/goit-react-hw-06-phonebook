import React from 'react'
import styles from './contactList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredContacts } from 'store/selectors/contactSelectors'
import { contactDeleted } from 'store/slices/contactsSlice'

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts)
  const dispath = useDispatch()

  function deleteContact (contactId) {
    dispath(contactDeleted(contactId))
  }
  
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>{contact.name}: {contact.number}</span>
          <button className={styles['list-button']} onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ContactList