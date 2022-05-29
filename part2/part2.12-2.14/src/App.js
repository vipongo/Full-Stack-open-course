import React , { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'


const App = () => {
  const [countries, setcountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setcountries(response.data)
      })
  }, [])

  console.log(countries)

  const [showAll, setShowAll] = useState('')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value) 

  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(showAll.toLowerCase()))

  return (
    <div>
      <Filter 
      showAll={showAll}
      handleFilterChange = {(event) => handleFilterChange(event)}
      />

      <Countries
      countriesToShow={countriesToShow}
      />
    </div>
  )
}

export default App