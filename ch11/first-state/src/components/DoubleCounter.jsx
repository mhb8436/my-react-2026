import { useState } from "react";

function DoubleCounter( ) {
    const [count, setCount] = useState(1);

    function handleDouble() {
        setCount(count * 2)
    }

    return (
        <div className="demo">
            <p className="counter-value">{count}</p>

            <div className="button-row">
                <button onClick={handleDouble}>x 2</button>
            </div>
        </div>
    )
}

export default DoubleCounter;