import { useRef } from 'react';

function FocusInput() { 
    const inputRef = useRef(null); // dom 객체 <input type="text" 
    const clickCount = useRef(0);  // 버튼을 클릭한 회수(화면에는 안보여) 
    
    const handleFocus = () => {
        // inputRef.current == <input type="text" /> 
        // input type text 에는 focus라는 함수가 기본 제공
        // focus()함수가 실행되면 입력 커서가 입력칸에 기다리고 있어  
        inputRef.current.focus(); 
        clickCount.current = clickCount.current + 1; 
        // clickCount 객체에는 current 가 숫자로 지정되어 있어요
        // 기본값은 1 
        console.log(`포커스 버튼 누른 횟수 : ${clickCount.current}`);
    }

    return (
        <div className='demo'>
            <input
                ref={inputRef}
                type="text"
                placeholder='버튼을 누르면 여기로 커서가 이동해요'
            />

            <div className='button-row'>
                <button onClick={handleFocus}>입력 칸에 커서 올리기</button>
            </div>

            <p className='hint'>
                버튼을 몇 번 눌렀는지 콘솔에 찍히고, 화면에는 숫자 바뀌지 않아요
                즉 렌더링 하지 않아요. ref 는 값이 바뀌어도 화면을 다시 그리지 않아요
            </p>
        </div>  
    )
}

export default FocusInput;