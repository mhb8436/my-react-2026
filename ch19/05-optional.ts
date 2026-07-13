interface Product{
    id: string
    name: string
    price: number
    discount?: number // ? => 이 필드는 있어도 되고 없어도되
}

const headphone : Product = {
    id: 'p01', name:'에어팟프로', price: 289000,
}
const keyboard : Product = {
    id: 'k01', name: '해피해킹 프로페셔널', price: 360000, discount: 0.1
}

function salePrice(product: Product | undefined): string {
    // product?.name => product 에 undefined 가 들어오면 
    // 에러를 밷지말고 undefined를 바로 돌려줘
    // ?? 외쪽이 undefined 이면 오른쪽 내용을 사용하세요 
    const name = product?.name ?? '상품'
    // const price = product.price;
    return name
}
console.log(salePrice(headphone))
console.log(salePrice(undefined))

// 연습문제 1 
// 1) User 라는 인터페이스를 만드는데요 id 문자열, nickname 도 문자열
// nickname 은 있어도 되고 없어도 되요
interface User {
    id: string
    nickname?: string
}
// 2) showNickname 이라는 함수를 만들고 매개변수(함수의 인자)로 
//    User 타입과 undefined을 받을 수 있어요 
//    이 함수의 리턴 결과로 user 의 nickname 이 없으면 '익명' 을 반환해줘요 
function showNickname(user : User | undefined) {
    return user?.nickname ?? '익명'
}
console.log(showNickname({id: "user-01", nickname: "이지훈"}))
console.log(showNickname(undefined))