import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToggleBox from './components/ToggleBox'
import CounterBox from './components/CounterBox'
import FocusInput from './components/FocusInput'
import {useTheme,  ThemeProvider} from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton'
import UserHeader from './components/UserHeader';
import UserGretting from './components/UserGreeting';
import { UserProvider } from './context/UserContext'

import GreetingCard from './components/GreetingCard';
import GreetingForm from './components/GreetingForm';
import { GreetingProvider } from './context/GreetingContext';

function Layout() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <h1> Context - props 사용안하고 다크모드 켜기 </h1>
      <section className='section'>
        <ThemeToggleButton/>
      </section>
      <section className='section'>
        <h2>떨어진 두개의 다른 컴포넌트에서 이름을공유합니다</h2>
        <UserHeader/>
        <div className='gap'></div>
        <UserGretting/>
      </section>
      <section>
        <h2>인사말 전달 컴포넌트</h2>
        <GreetingForm/>
        <div className='gap'></div>
        <GreetingCard/>
      </section>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <GreetingProvider>
        <Layout/>
        </GreetingProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
