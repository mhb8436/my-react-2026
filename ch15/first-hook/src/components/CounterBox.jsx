import useCounter from "../hooks/useCounter";

function CounterBox() {
    const { count, increase, decrease, reset } = useCounter(0);

    return (
        <div className="demo">
            <p className="counter-value">{count}</p>

            <div className="button-row">
                <button onClick={decrease}> -1 </button>
                <button onClick={increase}> +1 </button>
                <button onClick={reset}> 리셋 </button>
            </div>

            <p className="hint">
                값을 다루는 코드는 useCounter 훅안에 있고, 
                이 컴포넌트에서는 useState가 단 한줄도 없습니다. 
            </p>
        </div>
    )
}
export default CounterBox;