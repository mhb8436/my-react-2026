// 인자로 받은 items 배열에서 첫번째 인자만 반환한다. 
// T는 자리표시자 : 이 함수가 다루는 타입을 지칭하는 변수이름 
// Type 약자 
function first<T>(items: T[]) : T {
    return items[0]; // K 타입 
}

const names : string[] = ['수진','민준','지우']
const prices : number[]  = [10000, 20000, 30000]

const a = first<string>(names);
console.log(a)
const b = first<number>(prices);
console.log(b)
// const c = first<string>(prices);
// useState<Product[]>([])
// useState<string[]>([])
// any 는 지양 , 가능하면 쓰지마세요
function first1(items: any[]) { // java Object
    return items[0]
}


// 제네릭을 받은 타입 그대로 감싸는 함수도 만들어 봅니다. 
function box<T>(value: T): {value:T}{
    return {value}
}

console.log(box("핸드폰"))
console.log(box<number>(12000))