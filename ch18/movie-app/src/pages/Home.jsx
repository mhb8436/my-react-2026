import SearchBar from '../components/SearchBar'
import { useMovieSearch } from '../hooks/useMovieSearch'

export default function Home() {
    const {query, setQuery, results, loading, error, searched, search} = useMovieSearch();
    // useMovieSearch 훅에 비즈니스 + 및 화면 제어을 위한 필드가 모두 있어요

    return (
        <div className='container'>
            <SearchBar value={query} onChange={setQuery} onSearch={search} />
        </div>
    )
}