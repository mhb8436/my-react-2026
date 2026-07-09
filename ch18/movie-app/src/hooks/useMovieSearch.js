import { useState, useEffect } from 'react'
import { searchMovies } from '../api/movies';

export function useMovieSearch() {
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [results, setResults] = useState([])
    const [searched, setSearched] = useState(false);

    async function search(keyword) {
        const trimmed = keyword.trim(); // " " -> "", " spider " -> "spider"
        if(!trimmed) {
            setResults([]);
            setError('')
            setSearched(false);
            return; // 다음줄은 실행하지 말고 search 함수를 종료 
        } 
        setLoading(true);
        setError('')
        setSearched(true);
        try{
            const data = await searchMovies(trimmed);
            setResults(data)
        }catch(e){

        }finally{

        }
    }
}
