import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [num, setNum] = useState(0); 
  // num 값, setNum 은 함수 에요 
  // (num의 값을 변경시켜주고나서 화면을 업데이트합니다. return () )
  // const [현재값, 값을바꾸는함수] = useState(0); // 0 : 은 초기값
  

  let count = 0;
  function add() {
    // count = count +1 해서 넣을 경우에
    // 변수만 업데이트 되고, React에서는 몰라요
    // 리액트에서 화면을 다시 그려주지 않아요 
    // {count} in JSX 0 이유가 
    // App() 함수가 실행될때 return () 
    // 하구선 화면을 다시 그리지 않아요.
    count = count + 1;
    console.log(count);
  }
  // useState 사용해서 변수 업데이트하기 
  function addNum() {
    const newNum = num + 1;
    setNum(newNum); // setNum 이 호출될 때마다 화면이 다시 그려집니다. 
  }

  function minusNum() {
    // 본문 구현  num 에서 1씩 빼주는거에요
    // jsx - 1씩 빼주는 버튼을 만들고 minusNum을 호출해보세요 
    // 문제1 요 함수를 구현해보세요 
    // const num2 = num - 1;
    setNum(num-1)
  }

  function initNum() {
    // 무조건 num 을 0으로 초기화 
    setNum(0)
  }
  
  // name, setName 이라는 변수와 바꾸는 함수를 useState 로 만들고 (초기값은 "")
  // hiName() { } 만들고  
  // JSX button과  name 변수를 본문에 출력하고 
  // button을 클릭하면(타이틀은 "안녕") name 에 "안녕 이름" -> "안녕 안녕 이름" -> "안녕 안녕 안녕 이름"

  const [name, setName] = useState("")
  function hiName () {
    setName(`안녕 ${name}`)
  }

  return (
    <>
      <section className='section'>
        <h2>일반 변수 증가 되나요?</h2>
        <p>
          일반 변수 : <strong>{count}</strong>
          <button onClick={add}> + 1 해주기 </button>
        </p>
        <br></br>
        <h1>state 변수 증가</h1>
        <p>
          state 값 : <strong>{num}</strong>
          <button onClick={addNum}> num에 +1 해주기 </button>
          <button onClick={minusNum}> num에 -1 해주기 </button>
          <button onClick={initNum}> 0으로 초기화 </button>
        </p>

      </section> 
      <section>
        <h2>안녕 이름</h2>
        <p>   
          이름 : <strong>{name} 이지훈</strong>
          <button onClick={hiName}>안녕</button>
        </p>
      </section>
    </>
  )
}

export default App
