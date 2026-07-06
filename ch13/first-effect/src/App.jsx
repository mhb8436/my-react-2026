import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserList from './components/UserList';
import PostList from './components/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1> useEffect - 데이터 가지고 오기 (외부에서)</h1>
      {/* <section className='section'>
        <h2> 화면이 뜨면 사용자 목록을 가져옵니다.</h2>
        <UserList/>
      </section> */}
      <section className='section'>
        <h2> 화면이 뜨면 게시글 목록을 가져옵니다.</h2>
        <PostList/>
      </section>
    </div>
  )
}

export default App
