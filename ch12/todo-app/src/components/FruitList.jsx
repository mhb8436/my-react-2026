function FruitList() {

    const fruits = ["사과", "바나나", "포도", "귤", "수박", "복숭아"]
    return (
        <ul>
            {/* <li> 태그로 과일목록을 출력해보세요  */}
            {
                fruits.map((f)=> (
                    <li key={f}>{f}</li>
                ))
            }
        </ul>
    )
}

export default FruitList;