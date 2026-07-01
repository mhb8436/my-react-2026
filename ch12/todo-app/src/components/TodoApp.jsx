import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoApp() {
    // crypto.randomUUID() 절대 겹쳐지지 않는 ID를 생성해줍니다. crypto 내장함수
    const [todos, setTodo] = useState([
        {id : crypto.randomUUID() , text: 'useState 복습하기', done: false},
        {id : crypto.randomUUID() , text: '컴포넌트 만들기 복습하기', done: true},
    ]);

    const [text, setText] = useState("");
    // function handleText(event) {}
    const handleText = (event) => {
        console.log(event)
        setText(event.target.value); // event 객체에서 input type text 이 변경될때마다 여기에 담깁니다.
    }
    // function handleAdd(event) {}
    const handleAdd = (event) => {
        event.preventDefault(); // form 이 제출되었을 때 자동 새로고침 막아 절대 안되 .

        const newTodo = { id: crypto.randomUUID(), text: text, done: false}
        setTodo([...todos, newTodo]);
        setText("")
    }

    const handleToggle = (id) => { 
        setTodo((prev) => prev.map((todo)=>{ // todo.id handleToggle (id)와 같으면 done 상태를 바꿔라 
            return todo.id === id ? {...todo, done: !todo.done} : todo
        }))
    }

    const handleDelete = (id) => { 
        setTodo(
            (prev) => prev.filter((todo) => todo.id !== id)
        );
    }

    return (
        <div className='card'>
            <h2>할일 목록</h2>
            <form className='todo-form' onSubmit={handleAdd}>
                <input 
                    type="text"
                    placeholder='할일을 입력 하세요'
                    value={text}
                    onChange={handleText}
                />
                <button type="submit">추가</button>
            </form>

            <ul className='todo-list'>
                {
                    todos.map((todo)=> (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                            />
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoApp;