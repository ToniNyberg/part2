import React from 'react'

const Persons = ({ persons, searchTerm }) => {

    const Person = ({ data }) => {
        const { name, number } = data
        return (
            <ul>{name} {number}</ul>
        )
    }

    return (
        <div>
            {persons.filter((val) => val.name.toLowerCase().includes(searchTerm.toLowerCase())).map((data, id) => <Person key={id} data={data} />)}
        </div>
    )
}

export default Persons
