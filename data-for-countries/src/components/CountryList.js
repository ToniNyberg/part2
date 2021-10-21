import React, { useState, useEffect } from 'react'
import CountryCard from './CountryCard'

const url = 'https://restcountries.com/v3.1/all'

const CountryList = ({ searchTerm }) => {

    const [country, setCountry] = useState([])
    const [card, setCard] = useState()

    const fetchCountryData = async () => {
        const response = await fetch(url)
        const country = await response.json()
        setCountry(country)
    }

    useEffect(() => {
        fetchCountryData()
    }, [])


    const array = country.filter((val) => val.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

    useEffect(() => {
        array.length === 1 && setCard(array[0])
    }, [array])

    const handleCountryCard = (event) => {
        const selectedCountry = country.find(c => c.name.common === event.target.value)
        setCard(selectedCountry)
    }

    return (
        <div>
            {array.length <= 10 && array.length > 1 ? array.map((data) => {
                const { ccn3, name } = data
                const { common } = name
                return (

                    <div key={ccn3}>
                        <ul>{common} <button value={common} onClick={(event) => handleCountryCard(event)}>show</button></ul>
                    </div>

                )

            }) : array.length !== 1 ? <p>Too many matches, specify another filter</p> : null}
            {card && <CountryCard data={card} />}
        </div>
    )
}

export default CountryList
