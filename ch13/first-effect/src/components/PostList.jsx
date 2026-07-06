import { useState, useEffect } from 'react';

function PostList() {
    const [posts, setPosts] = useState([]); // 데이터타입은 배열이고, 초기값음 []
    const [loading, setLoading] = useState(true); //loding 상태는 기본 true
    const [error, setError] = useState(null);
    
    const loadPosts = async () => {
        setLoading(true);
        setError(null); 
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/post1");
            if(!res.ok) { // 응답에서 ok 가 아니야 ... 서버에서 처리가 실패했어용
                throw new Error(`서버 응답 오류가 났어요 [${res.status}] `); 
                // 에러가 발생했어요 그 아래 구문은 실행하지 말아요 
            }
            const data = await res.json()
            setPosts(data)
        }catch(e){
            // 문제 1  처리 구문을 만들어보세요 error 메시지를 담아보세요
            setError(e.message)
        }finally{
            // 문제 1  로딩 처리가 끝난 후에 로직을 만들어보세요 
            setLoading(false)
        }
    }
    
    useEffect(()=> {        
        loadPosts();

    }, []); 
    // 두번째 인자에는 값이 들어갈 수 있어요.. 이 값이 변경되면 useEffect 실행 
    // [] 빈 배열일 경우에는 화면 로딩될때 한번만 실행 

    // 문제 2 - 1 : loading 이 true일 경우 화면에 UserList 처럼 사용자 에게 안내 문구 처리 해보세요
    if(loading){
        return (
            <div className='demo'>
                <p className='status-loading'>게시글을 불러오는 중입니다.</p>
            </div>
        )
    }
    // 문제 2 - 2 : error 가 true일 경우 UserList 처럼 사용자 안내 문구를 넣어보세요 
    if(error) {
        return (
            <div className='demo'>
                <p className='status-error'> 불러오기에 실패했어용 </p>
            </div>
        )
    }
    return (
        <div className='demo'>
            <div className='toolbar'>
                <button className='primary' onClick={loadPosts} disabled={loading}>
                    다시불러오기
                </button>
                {/* loding 이 false 이고, 에러가 없으면 <span> 태그를 출력해  */}
                {!loading && !error && <span className='hint'>글 {posts.length}개</span>}
            </div>

            {loading && <p className='status-loading'>글을 불러오는 중입니다.</p>} 
            {error && <p className='status-error'>글을 불러오다 에러가 발생했어용.</p>} 

            <ul className='post-list'>
               {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <div className='post-title'>{post.title}</div>
                            <div className='post-body'>{post.body}</div>
                        </li>
                    )
               })
               }

            </ul>
        </div>
    )
}

export default PostList;