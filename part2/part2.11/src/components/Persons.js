import React from 'react'

const Person = ( props ) => {
  return (
    <div>
    <ul>
        {props.personsToShow.map(person =>
          <div>
            {person.name}: {person.number}
          </div>
        )}
    </ul>
    </div>
  )
}

export default Person