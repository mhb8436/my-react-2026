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
