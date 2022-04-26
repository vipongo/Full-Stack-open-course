import { useState } from 'react'

const generateRandomInteger = (max) => {
  return Math.floor(Math.random() * max);
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Anecdote = ({selected, points}) => {
  return(
    <div>
      {selected}<br/>
      {points} people voted for this anecdote
    </div>
  )
}

const increaseVote = (selected, points) => {
  const copy= [...points]
  copy[selected]+=1
  return (
    copy
  ) 
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(generateRandomInteger(7))
  const [points, setPoint] = useState(Array(7).fill(0))
  return (
    <div>
      <Anecdote selected={anecdotes[selected]} points={points[selected]}/>
      <Button handleClick={() => setPoint(increaseVote(selected, points))} text="vote" />
      <Button handleClick={() => setSelected(generateRandomInteger(7))} text="Next anecdote" />
      
    </div>
  )
}

export default App