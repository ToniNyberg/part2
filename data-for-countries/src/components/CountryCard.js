import React, { useState, useEffect } from 'react'



const CountryCard = ({ data }) => {
    const { ccn3, name, population, capital, flags, languages } = data
    const { common } = name
    const { png } = flags

    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`

    const [apiData, setApiData] = useState({});
    const languageValues = Object.values(languages)

    const fetchWeatherData = async (apiUrl) => {
        const response = await fetch(apiUrl)
        const apiData = await response.json()
        setApiData(apiData)
    }
    console.log(capital);
    console.log(apiUrl);

    useEffect(() => {
        fetchWeatherData(apiUrl)
    }, [apiUrl])

    return (
        <div>
            <section>

                <article key={ccn3}>
                    <div>
                        <h1>{common}</h1>
                        <p>Capital: <span>{capital}</span></p>
                        <p>Population: <span>{population}</span></p>
                        <h3>Spoken languages:</h3>
                        {languageValues.map((lan, i) => <li key={i}>{lan}</li>)}
                        <div>
                            <img src={png} alt={common} style={{ resizeMode: "contain", height: "100px", width: "200px", margin: "10px" }} />
                        </div>
                        <div>
                            <h1>Weather in {capital}</h1>
                            <h5>temperature: {apiData?.current?.temperature} Celsius</h5>
                            <img src={apiData?.current?.weather_icons[0]} alt="icon" />
                            <h5>wind: {apiData?.current?.wind_speed} mph, direction {apiData?.current?.wind_dir} </h5>
                        </div>
                    </div>
                </article>

            </section>
        </div>
    )

}

export default CountryCard
