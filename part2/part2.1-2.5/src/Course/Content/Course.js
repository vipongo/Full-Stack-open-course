import React from 'react'

const Part = ({item}) => {
    return(
      <li>
        {item.name} {item.exercises}
      </li>
    )
  }

const Sum = ({parts}) => {
    const total = 
        parts.reduce(
            (previousValue, currentValue) => (previousValue + currentValue.exercises) ,0)
    return(
      <b>Number of exercises {total}</b>
      )
  }

const Course = ({course}) => {
    
    return(
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(part=> 
                    <Part  key={part.id} item={part}/>    
                )}
                <Sum parts={course.parts}/>
            </ul>
        </div>
    )
}

export default Course