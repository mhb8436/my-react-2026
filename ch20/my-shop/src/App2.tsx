import { useReducer } from 'react';

type Action = {type: 'increment'} | {type: 'decrement'} | {type: 'reset'}

// state 현재값, action 동작방식 
function counterReducer(state: number, action: Action) : number {
    switch(action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0
        default:
            return state;
    }
}

function App() {
    const [count, dispatch] = useReducer(counterReducer, 0);
    // const [count, setCount] = useState(0);
    // +1 setCount(count+1), -1 setCount(count-1)
    return (
        <div className='container'>
            <p>count: {count} </p>
            <button onClick={()=> dispatch({type: 'increment'})}> +1 </button>
            <button onClick={()=> dispatch({type: 'decrement'})}> -1 </button>
            <button onClick={()=> dispatch({type: 'reset'})}>     0  </button>
        </div>
    )
}

export default App;