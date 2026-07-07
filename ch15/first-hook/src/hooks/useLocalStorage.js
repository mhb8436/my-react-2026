import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(
        () => {
            const saved = localStorage.getItem(key); // 저장된 값을 읽어요 
            // saved 의 타입은 무조건 문자열 
            // 문자열을 자바스크립트의 객체로 변환하려면 JSON.parse 
            return saved !== null ? JSON.parse(saved) : initialValue;
        }
    );
    useEffect(
        ()=> {
            // value 는 자바스크립트 객체 
            // localStorage에는 자바스크립트 객체를 넣을 수가 없어요
            // 문자열로  자바스크립트 객체 -> 문자열(json 포멧) 으로 변경하는
            // 함수가 있어요 JSON.stringify
            localStorage.setItem(key, JSON.stringify(value));
        }
    , [key, value]); 
    // key 또는 value 값이 변경될 때 마다 useEffect 의 첫번째 인자의 함수가 실행 
    return [value, setValue]
}
export default useLocalStorage;
