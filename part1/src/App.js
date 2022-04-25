const Header = (course) => {
  return(
    <h1>{course.name}</h1>
  )
}

const Part = (content) => {
  return(
    <div>
      {content.name} {content.exercise}
    </div>
  )
}
const Content = (section) => {
  return(
    <div>
      <Part name={section.part1} exercise={section.exercises1} />
      <Part name={section.part2} exercise={section.exercises2} />
      <Part name={section.part3} exercise={section.exercises3} />
    </div>
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
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />      
    </div>
  )
}

export default App