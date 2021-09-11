import React from 'react'

const PersonForm = ({ newName, newNumber, setNewName, setNewNumber, persons, setPersons }) => {

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        let able = true

        persons.forEach(person => {
            if (person.name === newName)
                able = false
        })

        if (able)
            setPersons(persons.concat(personObject))
        else
            window.alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber("")
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
