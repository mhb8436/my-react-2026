import { useState } from 'react'
import './App.css'
import PostApp from './components/PostApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>나의 게시판</h1>
      <p className='subtitle'>
        글을 추가하고, 목록에서 수정 삭제 해볼께용
      </p>
      <PostApp/>
    </div>    
  )
}

export default App
