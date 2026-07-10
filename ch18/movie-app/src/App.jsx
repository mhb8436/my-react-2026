import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home   from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import { FavoritesProvider } from './context/FavoritesContext'
import Favorites from './pages/Favorites'

function App() {

  return (
    <FavoritesProvider>      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </FavoritesProvider>
  )
}

export default App
