import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Registration from './components/Registration'
import { Tabs } from '@mui/material'
import Tabs1 from './components/Tabs1'
import Navbar1 from './components/Navbar1'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <First/><Registration/> */}
      {/* <Registration/> */}
      {/* <Tabs/> */}
      {/* <Tabs1/> */}
      <Navbar1/>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/ooq" element={<Registration/>} />
        <Route path="/kkk" element={<Tabs1/>} />
        <Route path="/k" element={<Counter/>} />
      </Routes>
    </>
  )
}

export default App
