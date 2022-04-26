const Header = (course) => {
  return(
    <h1>{course.name}</h1>
  )
}

const Part = (content) => {
  console.log(content)
  return(
    <div>
      {content.part.name} {content.part.exercises}
    </div>
  )
}
const Content = (section) => {
  console.log(section)
  return(
    <div>
      <Part part={section.items[0]} />
      <Part part={section.items[1]} />
      <Part part={section.items[2]} />
    </div>
    )

}
const Total = (course) => {
  let total = 0;
  course.total.forEach(element => {
    total = total+element.exercises
  });
  return(
    <p>Number of exercises {total}</p>
    )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header name={course.name} />
      <Content items={course.parts} />
      <Total total={course.parts} />      
    </div>
  )
}

export default App