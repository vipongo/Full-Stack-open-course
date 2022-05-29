import React from 'react'

const Filter = ( props ) => {
    return (
        <div>
        <h2>Filter</h2>
        <div> 
          Filter: <input
          showAll={props.showAll}
          onChange={props.handleFilterChange}
          />      
        </div>
        </div>
    )
  }
  
  export default Filter