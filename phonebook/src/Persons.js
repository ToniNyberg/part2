import React from 'react'
import personservice from './services/personservice'

const Persons = ({ persons, searchTerm, setPersons }) => {

    const Person = ({ data }) => {
        const { name, number, id } = data
        return (
            <ul key={id}>{name} {number}</ul>
        )
    }

    const removePerson = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            personservice
                .remove(id)
                .then(res => {
                    setPersons(persons.filter(p => p.id !== id))
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        }
    }

    return (
        <div>
            {persons.filter((val) => val?.name?.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((data) => <span key={data?.id}><Person data={data} />
                    <button onClick={() => removePerson(data?.id)}>delete</button>
                </span>)}
        </div>
    )
}

export default Persons
