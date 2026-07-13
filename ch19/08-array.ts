interface Item {
    name: string
    price: number
    qty : number
}

const cart: Item[] = [
    {name: "기계식키보드", price: 100000, qty: 1},
    {name: "헤드폰", price: 50000, qty: 12},
    {name: "샴푸", price: 10000, qty: 10},    
];

const names: string[] = cart.map((it) => it.name);
console.log(names)
// 문제 1 prices 배열을 만들고 cart 에서 값만 뽑아보세요
// [100000, 50000, 10000]
const prices : number[] = cart.map((it) => it.price)
console.log(prices)
// it -> iterable 
const cheap : Item[] = cart.filter((it) => it.price > 20000);
console.log(cheap)

// 문제 2 수량이 11 보다 작은 상품만 카트에서 추출해서 새 배열로 만들어보세요
const small : Item[] = cart.filter((x) => x.qty < 11);
console.log(small)