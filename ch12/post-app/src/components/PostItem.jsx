
function PostItem({
    post, 
    onDelete,
    isEditing,         // 편집 중이니 
    editTitle,         // 편집될 제목
    editContent,       // 편집될 내용
    onEditTitleChange, // 함수(제목이 변경됨을 감지함수)
    onEditContentChange, // 함수(내용이 변경됨을 감지함수)
    onStartEdit,         // 편집이 시작되었을때 호출 -> PostApp 
    onSaveEdit,          // 편집이 종료되었을때 호출  -> PostApp
}) {

    if(isEditing) { // isEditing 참이면 if 문이 실행
        // 아래의 return 먼저 반환되서 
        // 하단의 return은 반환되지 않아요 -> 편집용 화면을 그려주는
        // jsx 넣어주면 됩니다.  [편집용 UI]
        return (
            <li className="post-item post-item-editing">
                <form className="post-edit-form" onSubmit={onSaveEdit}>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={onEditTitleChange}
                        placeholder="제목"
                    />
                    <textarea
                        value={editContent}
                        onChange={onEditContentChange}
                        placeholder="내용"
                        rows={3}
                    />
                    <div className="post-edit-actions">
                        <button type="submit">저장</button>
                        <button className="ghost">취소</button>
                    </div>
                </form>
            </li>
        )
    }
    // [하나의 게시글을 보여주는 UI]
    return (
        <li className="post-item">
            <div className="post-content">
                <strong className="post-title">
                    {post.title}
                </strong>
                <p className="post-body">
                    {post.content}
                </p>
            </div>
            <div className="post-actions">
                <button className="ghost" 
                    onClick={()=>onStartEdit(post.id)}>
                    수정 
                </button>
                <button 
                    type="button" 
                    className="danger"
                    onClick={()=>onDelete(post.id)} >
                        삭제
                </button>
            </div>
        </li>
    )
}

export default PostItem;