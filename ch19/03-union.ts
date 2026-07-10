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

console.log(describe('electroincs'))
// console.log(describe('food'));

function priceText(price: number | null ) : string {
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
