import { useState } from 'react'

const StatisticLine = (props) => (
  <tr>
    <td>{props.name}:</td>
    <td>{props.value}</td>
  </tr>
)

const Stats = ({good, neutral, bad}) => {

  if(good!==0 || neutral!==0 || bad!==0){
    const average= (good-bad)/(good+bad+neutral)
    const positive= (good/(good+bad+neutral))*100

    return (
        <table>
          <tbody>
            <StatisticLine value={good} name={'Good'} />
            <StatisticLine value={neutral} name={'Neutral'}/>
            <StatisticLine value={bad} name={'Bad'}/>
            <tr>
              <td>Average:</td>
              <td>{average}%</td>
            </tr>
            <tr>
              <td>Positive:</td>
              <td>{positive}%</td>
            </tr>
          </tbody>
        </table>
    )
  }
  else{
    return (
      <div>
        No feedback given
      </div>
    )
  }
  
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
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App