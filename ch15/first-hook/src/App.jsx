import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToggleBox from './components/ToggleBox'
import CounterBox from './components/CounterBox'
import FocusInput from './components/FocusInput'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>15장은 커스텀 훅 </h1>
      <section className='section'>
        <h2>커스텀 훅</h2>
        <ToggleBox/>
        <h2>커스텀 카운터</h2>
        <CounterBox/>
        <h2>useRef</h2>
        <FocusInput/>
      </section>
    </div>
  )
}

export default App
