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