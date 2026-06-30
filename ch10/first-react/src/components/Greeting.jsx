function Greeting({name: name}) {
    // name : 사람이름이 
    // Greeting 함수를 호출쪽에서

    return (
        <p>
            안녕하세요 <strong>{name}</strong>님! React 에 입문하신걸 축하드립니다
        </p>
    );
}

export default Greeting;