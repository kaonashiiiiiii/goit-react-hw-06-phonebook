const getContacts = (state) => state.contacts.contacts

const getFilter = (state) => state.contacts.filter

const getFilteredContacts = (state) => {
  const { contacts, filter } = state.contacts
  if (!filter) return contacts

  return contacts.filter(contact => {
    if (contact.name.toLowerCase().includes(filter.toLowerCase())) return true
      
    return false
  })
}

export {
  getContacts,
  getFilter,
  getFilteredContacts
}