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
  },
  confetti: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0
  }
}))

const phrases = [
  'PUSH ME',
  'AND THEN JUST TOUCH ME',
  'SO I CAN GET MY',
  'SATISFACTION'
]

const photos = [
  'https://i.gifer.com/6os.gif',
  'https://cdn.funnyisms.com/7450a739-447a-4179-861f-64212c5e8b7f.gif',
  'https://media0.giphy.com/media/wc35PjXwGHtgA/giphy.gif',
  'https://thumbs.gfycat.com/BoilingMajesticHummingbird-size_restricted.gif',
  'https://www.theexpatfairs.com/wp-content/uploads/2019/07/just-do-it-gif-transparent-1.gif',
  'https://media0.giphy.com/media/kg77NnQ6AVOukapja2/giphy.gif',
  'https://media1.giphy.com/media/KcoTgjSupHkFuyS1fv/source.gif',
  'https://media3.giphy.com/media/ReltxRUhwdm2Q/giphy.gif',
  'https://media1.giphy.com/media/IyL7BTQmCK5Ow/giphy.gif',
  'https://pyxis.nymag.com/v1/imgs/150/c5c/5d7f99986e74c759dca50efe326a6334b3-drake-3.h473.w710.gif',
  'https://lh3.googleusercontent.com/proxy/c2ikNTE2jOfQdh7sdjLxJ-SpdLhyZ8P5nOKQLMGV1xh3ss6cWoYjwsh8ehjq0ASZW2U_MFp_jEyIy2seMwf7-7qU',
  'https://media4.giphy.com/media/5fBH6zrcIiOs65zXCtG/giphy.gif'
]

const getRandomPosition = () => ({ top: (Math.random() * 70) + 'vh', left: (Math.random() * 70) + 'vw' })

function App() {
  const classes = useStyles()
  const [clicks, setClicks] = useState(0)
  const [satisfactions, setSatisfactions] = useState('')
  const [images, setImages] = useState([])

  const buttonClick = () => {
    setClicks(clicks + 1)

    // Start adding satisfactions
    if (clicks >= phrases.length - 1 && clicks < 50) {
      setSatisfactions(satisfactions + '\nSATISFACTION')
    }

    // Start the song
    if (clicks === 6) {
      document.getElementById('song').src += '&autoplay=1'
    } else if (clicks >= 60 && clicks % 30 === 0 && images.length < photos.length) {
      setImages([...images, <img src={photos[images.length]} style={{position: 'absolute', ...getRandomPosition()}} />])
    }
  }

  return (
    <div className={classes.main} style={{backgroundColor: (clicks % 2 === 0 ? '#5050F0' : '#F05050')}}>
      <iframe id='song' width="560" height="315" src="https://www.youtube.com/embed/KYPcUxGS1Hw?start=35&loop=1&playlist=KYPcUxGS1Hw" allow="autoplay" hidden/>
      <div className={classes.satisfactions}>{satisfactions}</div>
      {images}
      <img src='https://i.gifer.com/XfQB.gif' className={classes.confetti} style={{display: clicks > 30 ? '' : 'none'}} />
      <Button className={classes.button} variant='contained' color='grey' onClick={buttonClick}>{phrases[clicks < phrases.length - 1 ? clicks : 3]}</Button>
      <div className={classes.counter}>CLICKS: {clicks}</div>
    </div>
  )
}

export default App
