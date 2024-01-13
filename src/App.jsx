import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'

function App() {

  return (
    <>
      <button onClick={() => {
        window.location.href = '/'
      }}>
        Landing Page
      </button>
      <button onClick={() => {
        window.location.href = '/dashboard'

      }}>
        Dashboard
      </button>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
