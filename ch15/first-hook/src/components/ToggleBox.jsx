import useToggle from '../hooks/useToggle'

function ToggleBox() {
    
    const [isOpen, toggleOpen] = useToggle(false);
    // isOpen : value, toggleOpen : toggle()
    // initialValue = false
    return (
        <div className='demo'>
            <div className='button-row'>
                <button 
                    className='primary' 
                    onClick={()=>toggleOpen()}>
                    {isOpen ? "설명 접기" : "설명 펼치기"}
                </button>
            </div>

            {
                isOpen && (
                    <p className='hint'>
                        이 열림/닫힘 값은 useToggle 커스텀 훅이 가지고 있습니다
                        동일 훅을 메뮤, 모달, 열림창에서 모두 가져다 사용가능합니다.
                    </p>
                )
            }
        </div>
    )
}

export default ToggleBox;