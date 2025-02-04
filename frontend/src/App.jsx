import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {LoginPage} from './Routess/Routes'
import React from 'react'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
 
        
     </Routes>
   <div>
    jvewq
   </div>
    </>
  )
}

export default App
