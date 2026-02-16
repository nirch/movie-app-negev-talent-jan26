import { useState } from 'react'
import './App.css'
import MoviesPage from './pages/MoviesPage'
import ActorsPage from './pages/ActorsPage'
import { Route, Routes, useNavigate } from 'react-router'
import HomePage from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import ProtectedRoute from './auth/ProtectedRoute'

function App() {
  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  function handleLogin(email, password) {
    setTimeout(() => {
      setActiveUser({ id: 1111, username: "john", role: "admin" });
      navigate("/movies");
    }, 1000);
  }

  function handleLogout() {
    setActiveUser(null);
    navigate("/");
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/movies"
          element={
            <ProtectedRoute activeUser={activeUser}>
              <MoviesPage onLogout={handleLogout} />
            </ProtectedRoute>
          } />
        <Route path="/actors"
          element={
            <ProtectedRoute activeUser={activeUser}>
              <ActorsPage onLogout={handleLogout} />
            </ProtectedRoute>
          } />
      </Routes>
    </>
  )
}

export default App
