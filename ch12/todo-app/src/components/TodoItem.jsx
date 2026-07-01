
function TodoItem({todo, onToggle, onDelete }) { 
    // todo 라는 객체를 TodoItem 에서 호출하는 곳(부모, TodoApp) onToggle 변수에 어떤걸 넣을거에요
    // onToggle <- TodoApp handleToggle 함수를 전달 
    return (
        <li className="todo-item">
            <input type="checkbox" 
                checked={todo.done} 
                onChange={()=>onToggle(todo.id) } />
                
            <span className={`text ${todo.done ? 'done' : ''}`}>
                {todo.text}
            </span>

            <button 
                className="danger" 
                onClick={()=> onDelete(todo.id)}>
                    삭제
            </button>
        </li>
    )
}

export default TodoItem;