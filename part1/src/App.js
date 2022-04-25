const Header = (course) => {
  return(
    <h1>{course.name}</h1>
  )
}
const Content = (section) => {
  return(
    <p>
      {section.name} {section.exercise}
    </p>
    )

}
const Total = (exercise) => {
  return(
    <p>Number of exercises {exercise.total}</p>
    )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name={part1} exercise={exercises1} />
      <Content name={part2} exercise={exercises2} />
      <Content name={part3} exercise={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />      
    </div>
  )
}

export default App