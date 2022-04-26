import { useState } from 'react'

const Display = props => <div>{props.name}: {props.value}</div>

const Stats = ({good, neutral, bad}) => {
  const average= (good-bad)/(good+bad+neutral)
  const positive= (good/(good+bad+neutral))*100
  return (
    <div>
      Average: {average}<br/>
      Positive: {positive}%
      
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give your feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <h1>Statistics</h1>
      <Display value={good} name={'Good'} />
      <Display value={neutral} name={'Neutral'}/>
      <Display value={bad} name={'Bad'}/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App