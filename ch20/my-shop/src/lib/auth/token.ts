const KEY = 'shop-token' // localStorage 에 저장되는 토큰 키

// 토큰을 로컬스토리지에서 가지고 오는 함수
export function getToken() : string | null {
    return localStorage.getItem(KEY)
}
// 토큰을 로컬스토리지에 저장해주는 함수 
export function setToken(token : string) {
    localStorage.setItem(KEY, token);
}
// 토큰을 삭제해주는 함수
export function clearToken(){
    localStorage.removeItem(KEY)
}