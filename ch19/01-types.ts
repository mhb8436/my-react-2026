console.log("1");
// 변수명 : 타입 
const name : string = "이지훈";
const price : number = 35000;
const isStock : boolean = true;

const tagline  = "타입쇼핑" // 타입을 추론, 오른쪽에 들어올 값이 분명
// 타입스크립트가 알아서 타입을 맞춰줍니다.
const version = 1; // 타입스크립트 컴파일러가 알아서 오른쪽 값의 타입으로 맞춰줍니다.

const name2 : string = "성시경"
// 문자열은 string, 숫자 : number,  참/거짓은 boolean 
const price2 : number = 1;

// 연습문제 1 타입 표기 채우기 
const sku : string = 'SKU-001'
const quantity : number = 3
const onSale : boolean = false ;

// 연습문제 2 
// 1) shippingFree number 붙여서 선언해보세요
const shippingFree : number = 200;
// 2) freeShipping 은 boolean 을 생략하고 false 를 할당해보세요
const freeShipping = true;  // 타입을 추론 해줬어요 (false 란 값을 보고 타입을 추론)
const shipPrice = 3000;



