import { React } from 'react'


const Filter = ({ setSearchTerm }) => {

    const handleFilter = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <input type="text" onChange={event => handleFilter(event)} />
    )
}

export default Filter
