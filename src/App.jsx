import { useState } from 'react'
import './App.css'
import MoviesPage from './pages/MoviesPage'
import ActorsPage from './pages/ActorsPage'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/actors" element={<ActorsPage />} />
      </Routes>
    </>
  )
}

export default App
