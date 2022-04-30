import {React, useState} from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='neutral' value={props.neutral} />
          <StatisticLine text='bad' value={props.bad} />

          <StatisticLine text='all' value={props.allClicks.length} />
          <StatisticLine text='average' value={((props.good* 1 + props.bad*-1 )/ props.allClicks.length).toFixed(4)} />
          <StatisticLine text='positive' value={(props.good / props.allClicks.length * 100).toFixed(2) + '%'} />
        </tbody>
      </table>
    </div>
  )
}
const StatisticLine = (props) => { 
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([]) // array to store all clicks

  const handleGoodClick = () => {
    setGood(good + 1) 
    setAll(allClicks.concat('G')) // add 'G' to allClicks
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat('N')) // add 'N' to allClicks
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks.concat('B')) // add 'B' to allClicks
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
     

    </div>
  )
}

export default App