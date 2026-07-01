import { useState } from 'react';

function Password() {
    const [show , setShow ] = useState(false); // show 데이터 타입은 boolean 

    function handleShow() {
        setShow(!show); // show 가 true 일 경우 -> false, show 가 false 일 경우 -> true
    }

    return (
        <div className='demo'>
            <div className='button-row'>
                <input type={show ? "text" : "password"} placeholder='비밀번호'/>
                {/* input type text , password **** */}
                <button onClick={handleShow}> {show ? "숨기기" : "보기"} </button>
            </div>
        </div>
    );

}

export default Password;