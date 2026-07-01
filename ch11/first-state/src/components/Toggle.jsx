import { useState } from 'react';

function Toggle() {

    const [ like, setLike ] = useState(false);

    function handleToggle() {
        setLike(!like); // 지금 값을 반대로 뒤집는 역할 !like
    }

    return (
        <div className='demo'>
            <div className='button-row'>
                <button onClick={handleToggle}>
                    {like ? "좋아요 취소": "좋아요"}
                </button>
            </div>
            <p className='toggle-status'>
                지금상태 : {like ? '좋아요를 눌렀어요' : '아직 좋아요 안눌렀어요'}
            </p>
            {/* like 가 true 일때만  && 오른쪽 내용을 출력해주세요 */}
            {
                like && (
                    <div className='secret-box'>고마워여! 여러분의 5번째 스테이트 박스입니다.</div>
                )
            }
        </div>
    );
}

export default Toggle;