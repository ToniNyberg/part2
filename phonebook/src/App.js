import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personservice from './services/personservice'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [alertMessage, setAlertMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personservice
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={alertMessage} />
      <ErrorNotification message={errorMessage} />
      <div><span>Filter shown with:</span> <Filter setSearchTerm={setSearchTerm} /></div>
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}
        persons={persons} setPersons={setPersons} setAlertMessage={setAlertMessage} setErrorMessage={setErrorMessage} />
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons} searchTerm={searchTerm} setPersons={setPersons} />
      </div>
    </div>

  )
}

export default App
