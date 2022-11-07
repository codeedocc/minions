import React from 'react'
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/NoWelcomePage" element={<NoWelcomePage />} />
          <Route path="/YesWelcomePage" element={<YesWelcomePage />} />
          <Route
            path="/TurnOffTheLights"
            element={<TurnOffTheLights />}
          ></Route>
          <Route path="/RoadToGuitar" element={<RoadToGuitar />}></Route>
          <Route path="/Chicken" element={<Chicken />}></Route>
          <Route path="/GuitarPlay" element={<GuitarPlay />}></Route>
          <Route path="/Joke" element={<Joke />}></Route>
          <Route path="/DestroyGuitar" element={<DestroyGuitar />}></Route>
          <Route
            path="/TalkingBeforeRide"
            element={<TalkingBeforeRide />}
          ></Route>
          <Route path="/TalkingAndCar" element={<TalkingAndCar />}></Route>
          <Route path="/EndingSong" element={<EndingSong />}></Route>
          <Route path="/FinalFight" element={<FinalFight />}></Route>
          <Route path="/KissEnd" element={<KissEnd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
