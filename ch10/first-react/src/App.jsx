import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  const myName = "지훈"

  return (
    <>
      <div>
        <h1>10장 첫번째 JSX 컴포넌트</h1>
        <p>JSX 컴포넌트를 직접 만들어봤어요</p>
        <h2>안녕하세요 좋은 아침입니다. {myName}</h2>
      </div>
      <div>
        <sectoin>
          <Greeting name={myName}/>
          <Greeting name={"클라우드"}/>
          <Greeting name={"강서여성인력개발센터"}/>
        </sectoin>
      </div>
    </>
  )
}

export default App
