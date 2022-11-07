import React, { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import NoWelcomePage from './components/NoWelcomePage'
import YesWelcomePage from './components/YesWelcomePage'
import TurnOffTheLights from './components/TurnOffTheLights'
import RoadToGuitar from './components/RoadToGuitar'
import Chicken from './components/Chicken'
import GuitarPlay from './components/GuitarPlay'
import Joke from './components/Joke'
import DestroyGuitar from './components/DestroyGuitar'
import TalkingAndCar from './components/TalkingAndCar'
import TalkingBeforeRide from './components/TalkingBeforeRide'
import EndingSong from './components/EndingSong'
import FinalFight from './components/FinalFight'
import KissEnd from './components/KissEnd'
import { useDispatch, useSelector } from 'react-redux'
import FinalSong from './assets/finalSong.mp3'

function App() {
  const song = useSelector((state) => state.song.song)
  const audioRef = useRef()

  useEffect(() => {
    if (song) {
      setTimeout(() => {
        audioRef.current.play()
      }, 5000)
    }
  }, [song])

  return (
    <div>
      <audio src={FinalSong} ref={audioRef} loop></audio>
      <BrowserRouter>
        <Routes>
          <Route path="/minions" element={<WelcomePage />} />
          <Route path="/minions/NoWelcomePage" element={<NoWelcomePage />} />
          <Route path="/minions/YesWelcomePage" element={<YesWelcomePage />} />
          <Route
            path="/minions/TurnOffTheLights"
            element={<TurnOffTheLights />}
          ></Route>
          <Route
            path="/minions/RoadToGuitar"
            element={<RoadToGuitar />}
          ></Route>
          <Route path="/minions/Chicken" element={<Chicken />}></Route>
          <Route path="/minions/GuitarPlay" element={<GuitarPlay />}></Route>
          <Route path="/minions/Joke" element={<Joke />}></Route>
          <Route
            path="/minions/DestroyGuitar"
            element={<DestroyGuitar />}
          ></Route>
          <Route
            path="/minions/TalkingBeforeRide"
            element={<TalkingBeforeRide />}
          ></Route>
          <Route
            path="/minions/TalkingAndCar"
            element={<TalkingAndCar />}
          ></Route>
          <Route path="/minions/EndingSong" element={<EndingSong />}></Route>
          <Route path="/minions/FinalFight" element={<FinalFight />}></Route>
          <Route path="/minions/KissEnd" element={<KissEnd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
