import React , { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import containsObject from './components/containsObject'


const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value) 

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)  
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)  
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if(containsObject(personObject,persons)){
      window.alert(`${newName} is already added to phonebook`);
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow = showAll===''
  ? persons
  : persons.filter(person => person.name.includes(showAll))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
      showAll={showAll}
      handleFilterChange = {(event) => handleFilterChange(event)}
      />

      <h3>Add new</h3>

      <PersonForm
      newName={newName}
      newNumber={newNumber}
      addName = {(event) => addName(event)}
      handleNameChange = {(event) => handleNameChange(event)}
      handleNumberChange = {(event) => handleNumberChange(event)} 
      />
      <h2>Numbers</h2>

      <Persons
      personsToShow={personsToShow}
      />
    </div>
  )
}

export default App