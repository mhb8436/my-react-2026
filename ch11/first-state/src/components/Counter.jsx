import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);

    function handleIncrease() {
        // 1씩 증가 count를 
        setCount(count+1)
    }

    function handleDecrease() {
        // 1씩 감소 count를
        setCount(count-1) 
    }

    function handleReset() {
        // count를 0으로 초기화
        setCount(0)
    }

    return (
        <div className="demo">
            <p className="counter-value">{count}</p>

            <div className="button-row">
                <button onClick={handleDecrease}> -1 </button>
                <button onClick={handleIncrease}> +1 </button>
                <button onClick={handleReset}> 리셋 </button>
            </div>
            <p className="hint">버튼을 누르면 숫자가 바뀌고 화면이 다시 그려집니다.</p>
        </div>
    )
}

export default Counter;