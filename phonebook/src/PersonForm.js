import React from 'react'
import personservice from './services/personservice'

const PersonForm = ({ newName, newNumber, setNewName, setNewNumber, persons, setPersons, setAlertMessage, setErrorMessage }) => {

    const addPerson = (event) => {
        event.preventDefault()

        const existingPerson = persons.find(person => person.name === newName)

        if (!existingPerson) {
            const personObject = {
                name: newName,
                number: newNumber,
                id: Math.floor(Math.random() * 1000)
            }
            personservice
                .create(personObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                    setAlertMessage(
                        `'${newName}' was succesfully added to the phonebook`
                    )
                    setTimeout(() => {
                        setAlertMessage(null)
                    }, 5000)
                    setNewName('')
                    setNewNumber("")
                })
        } else {
            const { id } = existingPerson
            window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            personservice
                .update(id, { ...existingPerson, name: newName, number: newNumber })
                .then(res => {
                    setPersons(persons.map(person => person.id !== id ? person : res.data))
                    setAlertMessage(
                        `'${newName}'s number was succesfully updated`
                    )
                    setTimeout(() => {
                        setAlertMessage(null)
                    }, 5000)
                })
                .catch(error => {
                    setPersons(persons.filter(person => person.id !== id))
                    setErrorMessage(
                        `'${newName}' was already deleted from the phonebook`
                    )
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
            setNewName('')
            setNewNumber("")
        }
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
