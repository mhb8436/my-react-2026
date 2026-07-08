import { useState } from 'react'
import './App.css'
import { usePosts }  from './hooks/usePosts'
import PostList  from './components/PostList'

function App() {
  // posts : 게시글 배열, loading : 로딩여부, error : 에러여부 
  const {posts, loading, error } = usePosts();

  return (
    <div>
      <h1>미니 게시판 (CURD) 연습 </h1>

      <PostList
        posts={posts}
        loading={loading}
        error={error}
        onEdit={()=>{}}
        onDelete={()=>{}}
      />
    </div>
  )
}

export default App
