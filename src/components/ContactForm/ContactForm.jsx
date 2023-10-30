import React, { useState } from 'react'
import styles from './contactForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from 'store/selectors/contactSelectors'
import { contactCreated } from 'store/slices/contactsSlice'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  function checkContact (contact) {
    const isContantExist = contacts.find(item => item.name === contact.name)
    if (isContantExist) {
      alert (`${contact.name} is already in contacts`)
      return false
    }
    return true
  }

  function resetForm () {
    setName('')
    setNumber('')
  }

  function onAddContactClick () {
    if (!name || !number) return
    const contact = {
      id: crypto.randomUUID(),
      name,
      number,
    }
    if (checkContact(contact)) {
      dispatch(contactCreated(contact))
    }
    resetForm()
  }
  return (
    <form className={styles['contact-form']}>
      <div>
        <label htmlFor="name">Name</label>
        <input value={name} type="text" name="name" required onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input value={number} type="tel" name="number" required onChange={(e) => setNumber(e.target.value)}/>
      </div>

      <button className={styles['contact-button']} type="button" onClick={onAddContactClick}>Add</button>
    </form>
  )
}

export default ContactForm