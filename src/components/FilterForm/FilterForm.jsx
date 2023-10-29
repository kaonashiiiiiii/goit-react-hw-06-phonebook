import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from 'store/slices/contactsSlice'

const FilterForm = () => {
  const filter = useSelector(state => state.contacts.filter)
  const dispatch = useDispatch()

  function onChange (e) {
    dispatch(setFilter(e.target.value))
  }
  return (
    <form>
      <label htmlFor="filter">Find contacts by name</label>
      <input value={filter} name="filter" onChange={onChange}/>
    </form>
  )
}

export default FilterForm