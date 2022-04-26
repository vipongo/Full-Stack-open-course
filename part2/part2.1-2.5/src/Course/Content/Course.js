import React from 'react'

const Part = ({item}) => {
    return(
      <li>
        {item.name} {item.exercises}
      </li>
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
            </ul>
        </div>
    )
}

export default Course