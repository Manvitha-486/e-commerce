import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './coponents/Routes'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
 
      
     </Routes>
   
    </>
  )
}

export default App
