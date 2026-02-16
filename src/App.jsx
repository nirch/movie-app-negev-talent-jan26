import { useState } from 'react'
import './App.css'
import MoviesPage from './pages/MoviesPage'
import ActorsPage from './pages/ActorsPage'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/actors" element={<ActorsPage />} />
      </Routes>
    </>
  )
}

export default App
