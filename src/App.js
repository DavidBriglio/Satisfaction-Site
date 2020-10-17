import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    position: 'absolute',
    bottom: 'calc(50vh - 2.5rem)',
    right: 'calc(50vw - 10rem)',
    height: '5rem',
    width: '20rem'
  },
  main: {
    textAlign: 'center',
    height: '100vh',
    width: '100vw'
  },
  counter: {
    bottom: '0',
    left: '0',
    position: 'absolute'
  },
  satisfactions: {
    display: 'inline',
    whiteSpace: 'pre-wrap',
    position: 'absolute',
    top: '52vh',
    marginLeft: '-3rem'
  }
}))

const phrases = [
  'PUSH ME',
  'AND THEN JUST TOUCH ME',
  'SO I CAN GET MY',
  'SATISFACTION'
]

function App() {
  const classes = useStyles()
  const [clicks, setClicks] = useState(0)
  const [satisfactions, setSatisfactions] = useState('')

  const buttonClick = () => {
    setClicks(clicks + 1)

    // Start adding satisfactions
    if (clicks >= phrases.length - 1 && clicks < 50) {
      setSatisfactions(satisfactions + '\nSATISFACTION')
    }

    // Start the song
    if (clicks === 6) {
      document.getElementById('song').src += '&autoplay=1'
    }
  }

  return (
    <div className={classes.main} style={{backgroundColor: (clicks % 2 === 0 ? '#5050F0' : '#F05050')}}>
      <Button className={classes.button} variant='contained' color='grey' onClick={buttonClick}>{phrases[clicks < phrases.length - 1 ? clicks : 3]}</Button>
      <div className={classes.counter}>CLICKS: {clicks}</div>
      <div className={classes.satisfactions}>{satisfactions}</div>
      <iframe id='song' width="560" height="315" src="https://www.youtube.com/embed/KYPcUxGS1Hw?start=35&loop=1&playlist=KYPcUxGS1Hw" allow="autoplay" hidden/>
    </div>
  )
}

export default App
