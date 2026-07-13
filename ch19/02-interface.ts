// interface 는 객체의 모양을 정의합니다.

interface Product {
    id: string
    name: string
    price: number // 숫자 
    isStock: boolean // boolean true, false  
}

const keyboard : Product = {
    id: "keykronk3",
    name: "키크론 K3 PRO",
    price: 198000,
    isStock: true
}

// 문제 1, 각자 원하는 제품 변수를 정하고 Product 형태로
// 만들어보세요

const coffee : Product = {
    id: "illy-001",
    name: "일리 캡슐",
    price: 900,
    isStock: true,
}
console.log(coffee);

const products : Product[] = [
    keyboard,
    coffee,
    {id: 'p02', name:"앱코 A87K", price: 100000, isStock: true}
]
for(const p of products) { 
    // p 는 Product 로 추론되기 때문데 p 만 눌러도 id, name, price 바로 알 수 있어요
    console.log(`${p.name} , ${p.price}, ${p.id}`)
}
// npx tsx 02-interface.ts

// 연습문제  
// 문제 1 ) Review 라는 인터페이스를 정의해보세요
// productId 문자열, rating 숫자, comment 문자열 
interface Review {
    productId: string
    rating : number
    comment : string
}
// 문제 2 ) review1 이라는 상수에 productId 아무거나, rating 도 아무거나
// comment 아무거나 넣고 출력해보세요 
const review1 : Review = {
    productId : 'p-01',
    rating: 5, 
    comment: '매우 좋아요 '
}
console.log(review1)

// 문제 3 )
// Address 인터페이스를 만들어보세요
// recipient, phone, zipCode, detail > 데이터 타입도 알아서 정해보세요
interface Address {
    recipient: string
    phone : string
    zipCode: string
    detail : string
}
// 문제 4) 
// home 이라는 변수에 Address 으로 선언하고 값을 아무거나 할당해보세요
const home : Address = {
    recipient: "강서여성인력개발센터",
    phone : "02-1234-5678",
    zipCode: "09123",
    detail : "안전하게 배송해주세요 "
}