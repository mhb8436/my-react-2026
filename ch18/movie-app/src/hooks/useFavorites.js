import { useState, useEffect } from 'react';
import { searchMovies } from '../api/movies';

const STORAGE_KEY = "ch18-favorites"; // 키이름을 공통변수에 담는다.

function readFromStorage () {
    try{
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : []; //saved 무조건 배열있겠죠. movie
    }catch(e){
        return [];
    }
}

export function useFavorites() {
    // readFromStorage : 함수명만 넘기면 리액트에서 이 컴포넌트의 첫번째 렌더에서
    // 한번만 값을 가지고 옵니다. readFromStorage()  이 컴포넌트가 렌더될때 마다 호출됩니다. 
    const [favorites, setFavorites] = useState(readFromStorage);

    // favorites 가 바뀔 때 마다 localStroage에 업데이트를 합니다. 
    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    }, [favorites]); 
}