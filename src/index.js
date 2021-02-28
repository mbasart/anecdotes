import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vots, setVotes] = useState(new Array(props.anecdotes.length+1).join('0').split('').map(parseFloat))

  const selectRandom = () => {
    var randomVal = Math.floor(Math.random() * props.anecdotes.length)
    setSelected(randomVal)
  }

  const handleVots = () => {
    var votCopy = [ ...vots ]
    votCopy[selected] += 1
    setVotes(votCopy)
  }

  const getMostVotedIndex = () => {
    console.log(Math.max( ...vots ))
    return vots.indexOf(Math.max( ...vots ))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>has {vots[selected]} votes</p>
      <Button handleClick={handleVots} text='vote' />
      <Button handleClick={selectRandom} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <p>
        {props.anecdotes[getMostVotedIndex()]}
      </p>
      <p>
        {vots[getMostVotedIndex()]}
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)