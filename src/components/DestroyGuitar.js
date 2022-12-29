import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Destroy from '../assets/destroy.webp'
import DirectedBy from '../assets/directerBy.mp3'
import { useSelector } from 'react-redux'
import { usePageScroller } from '../hooks/pageScroller'

function DestroyGuitar() {
  const navigate = useNavigate()
  const [isPranked, setIsPranked] = useState(true)
  const audioRef = useRef()
  const scroll = useSelector((state) => state.scroll.scroll)

  usePageScroller(scroll)

  useEffect(() => {
    if (isPranked) {
      audioRef.current.play()
    }
  }, [isPranked])

  return (
    <div className="container">
      <div className="main">
        <h3>Directed by Robert B. Weide</h3>
        <hr></hr>
        <img className="picture" src={Destroy}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>Ведьма... Зачем ты так со мной? Она была мне дорога 😭</span>
          <audio src={DirectedBy} ref={audioRef}></audio>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/minions/TalkingBeforeRide')}>
            Может ты умеешь что-то еще?
          </span>
        </div>
      </div>
    </div>
  )
}

export default DestroyGuitar
