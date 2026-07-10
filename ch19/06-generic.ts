// 인자로 받은 items 배열에서 첫번째 인자만 반환한다. 
function first<T>(items: T[]) : T {
    return items[0];
}

const names : string[] = ['수진','민준','지우']
const prices : number[]  = [10000, 20000, 30000]

const a = first<string>(names);
console.log(a)
