// 리터럴 유니온
type Category = 'electroincs' | 'fashion' | 'book';
// Category 타입에는 electroincs, fashion, book 이렇게만 올수 있요

function describe(category : Category) : string {
    switch(category) {
        case 'electroincs':
            return '전자기기'
        case 'fashion':
            return '패션'
        case 'book':
            return '도서'
    }
}

console.log(describe('electroincs'));
// console.log(describe('food'));

function priceText(price: number | null) : string {
    if(price === null ) return '가격미정'
    return `${price}원`
}
console.log(priceText(123000));
console.log(priceText(null));
// console.log(priceText("123000"));

// 'electroincs' | 'fashion' | 'book' | 'all'
// 유니온 확장 
type Filter = Category | 'all'; 
function filterLabel(filter: Filter): string {
    if(filter === 'all') return '전체'
    return describe(filter);
}

// 연습문제 1 
// A) Size 타입을 정의하고 S  M  L  
// B) selectedSize 변수에 M  를 넣고 console.log 로 출력해보세요
type Size = 'S' | 'M' | 'L'
const selectedSize : Size = 'M'
console.log(selectedSize);

// 연습문제 2
// A) Category 에 home 을 더한 HomeCategory 에 타입을 만들어보세요
type HomeCategory = Category | 'Home'

// 연습문제3
// ShipmentStatus 타입을 만들고('preparing' | 'shipping' | 'delivered' 를 만들고
// statusLabel 함수에서 각 값이 맞는 한글 문구를 반환해보세요 
type ShipmentStatus = 'preparing' | 'shipping' | 'delivered'
function statusLabel(status: ShipmentStatus) : string {
    switch(status) {
        case 'preparing':
            return '준비 중'
        case 'shipping':
            return '배송 중'
        case 'delivered':
            return '배송 완료'
    }
}

console.log(statusLabel('shipping'))
