import React from 'react'

const Part = ({item}) => {
    return(
      <li>
        {item.name} {item.exercises}
      </li>
    )
  }

const Sum = ({course}) => {
    console.log(course.parts)
    let total = 0;
    course.parts.forEach(element => {
      total = total+element.exercises
    });
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
                <Sum course={course}/>
            </ul>
        </div>
    )
}

export default Course