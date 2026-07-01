import {useState} from 'react';

function StepCounter() {
    const [step, setStep] = useState(0);

    function handleDecrease(){
        setStep(step - 2);
    }
    function handleIncrease() {
        setStep(step + 2);
    }
    function handleReset(){
        setStep(0)
    }
    return (
        <div className="demo">
            <p className="counter-value"> {step} </p>
            <div className="button-row">
                <button onClick={handleDecrease}>-2</button>
                <button onClick={handleIncrease}>+2</button>
                <button onClick={handleReset}>리셋</button>
            </div>

        </div>
    )
}

export default StepCounter;