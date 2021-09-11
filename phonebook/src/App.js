import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")


  return (
    <div>
      <h2>Phonebook</h2>
      <div><span>Filter shown with:</span> <Filter setSearchTerm={setSearchTerm} /></div>
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}
        persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons} searchTerm={searchTerm} />
      </div>
    </div>

  )
}

export default App
