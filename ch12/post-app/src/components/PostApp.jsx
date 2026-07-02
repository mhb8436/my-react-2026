import { useState } from 'react';
import PostItem  from './PostItem';

function PostApp() {
    const [posts, setPosts] = useState([
        {
            id: crypto.randomUUID(), 
            title: "React 재밌다",
            content: "React 정말 재미있다 하하하"
        },
        {
            id: crypto.randomUUID(),
            title: "Nestjs 재밋다",
            content: "Nestjs 도 정말 재미있을까? "
        }
    ]);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();

        const newPost = {
            id: crypto.randomUUID(),
            title: title,
            content: content
        }
        // prev는 setPosts 가 실행되는 딱 그시점의 posts  <- 리액트가 알아서 전달 
        setPosts( (prev)=> [...prev, newPost] ); 
        setTitle('')
        setContent('')
    }

    const handleDelete = (id) => {
        setPosts((prev)=> prev.filter((post) => post.id !== id ));
        // 입력된 id와 다른 게시글 들만 새로 배열을 만들어서 setPosts에 넣습니다.
        // 즉 입력된 id 게시글을 삭제하는 효과가 있습니다.
    }

    // 편집에 관련된 변수 3개를 추가, 1.편집될 게시글 아이디, 2.편집될 게시글 제목, 3. 편집될 게시글 내용 
    // editingId === null 아무것도 수정중이 아니야, editingId === 어떤ID 이면 어떤ID 게시글을 수정이야 
    const [editingId, setEditingId] = useState(null); // 편집할 게시글 아이디, 아이가 null 이면 아무것도 수정중이지 않음. 
    const [editTitle, setEditTitle] = useState('');   // 편집할 게시글 제목 
    const [editContent, setEditContent] = useState(''); // 편집할 게시글 내용 
    
    // 편집에 관련된 함수를 몇개 만들에요 .. 
    // 1. 게시글 편집 시작  -> 해당되는 게시글을 찾아서 그 아이디, 제목, 내용을 
    const handleStartEdit = (id) => {
        const post = posts.find((post) => post.id === id);
        if(!post)  return;
        setEditingId(post.id)
        setEditTitle(post.title)
        setEditContent(post.content)
    }

    // 2. 편집이 끝난 게시글을 저장 함수 
    const handleSaveEdit = (event) => {
        event.preventDefault();

        // editingId, editTitle, editContent 에 편집된 최종 내용이 담겨있다고 보고
        // 실제 저장하는 로직을 추가하겠습니다. 
        // posts = [ {id: 1, title: '리액트1': content:'리액트1'}, 
        // {id: 2, title: '리액트2': content:'리액트2'}, ]
        setPosts(
            (prev) => 
                prev.map((post) => {
                    // editingId : 2 , 
                    //  1. post : {id: 1, title: '리액트1': content:'리액트1'}
                    //  2. post : {id: 2, title: '리액트2': content:'리액트2'} 
                    // -> {id: 2,  title: '변경된 제목', content:'변경된내용'}
                    return post.id === editingId ? 
                    { ...post, title: editTitle, content: editContent} 
                    : post
                })
        );
        setEditingId(null);
        setEditTitle('');
        setEditContent('');
    }

    return (
        <div className="card post-app">
            <h2>글작성</h2>
            <form className='post-form' onSubmit={handleAdd}>
                <div className='post-form-row'>
                    <input 
                        type="text"
                        placeholder='제목을 입력하세요'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button type="submit">등록</button>
                </div>
                <textarea 
                    className="post-body-input"
                    placeholder='내용을 입력하세요'
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    rows={10}
                />
            </form>

            <h2>게시글 목록</h2>
            <ul className="post-list">
                {posts.map((post) => (
                    <PostItem 
                        key={post.id} 
                        post={post} 
                        isEditing={editingId === post.id}
                        editTitle={editTitle}
                        editContent={editContent}
                        onEditTitleChange={(e)=>setEditTitle(e.target.value)}
                        onEditContentChange={(e)=>setEditContent(e.target.value)}
                        onStartEdit={handleStartEdit}
                        onSaveEdit={handleSaveEdit}
                        onDelete={handleDelete}/>                    
                ))}
            </ul>
        </div>
    )
}

export default PostApp;