import { useState } from 'react';

function TextCounter() {

    const [text, setText] = useState(""); // 문자열

    function handleText(e) { // e 는 event 약자 
        const currentText = e.target.value; 
        console.log(currentText)
        setText(currentText);
    }

    return (
        <div className='demo'>
            <input
                type="text"
                value={text}
                onChange={handleText}
                placeholder='아무 글자나 입력해보세요'
            />

            <p className='hint'>지금 {text.length}글자</p>
        </div>
    )
}

export default TextCounter;