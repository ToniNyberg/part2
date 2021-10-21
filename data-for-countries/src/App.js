import React, { useState } from 'react'
import CountryList from './components/CountryList'
import Filter from './components/Filter'



const App = () => {


  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      find countries <Filter setSearchTerm={setSearchTerm} />
      <CountryList searchTerm={searchTerm} />
    </div>
  )
}

export default App

