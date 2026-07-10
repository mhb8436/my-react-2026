import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home   from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import { FavoritesProvider } from './context/FavoritesContext'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound';

function App() {

  return (
    <FavoritesProvider>      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/> 
        <Route path="*"  element={<NotFound/>}/>       
      </Routes>
    </FavoritesProvider>
  )
}

export default App
