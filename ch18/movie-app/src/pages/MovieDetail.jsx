import {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import MovieDetailView from '../components/MovieDetailView'
import { getMovieDetail } from '../api/movies'

export default function MovieDetail() {
    // <Link to={`movie/${movie.imdbID}`} 
    const { id } = useParams();
    
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(()=> {
        async function load() {
            setLoading(true);
            setError('')
            try{
                const data = await getMovieDetail(id)
                console.log(data);
                setMovie(data)
            }catch(e){
                setError(e.message)
            }finally{
                setLoading(false)
            }
        }
        load();
    }, [id]);

    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했어요 </div>

    return <MovieDetailView movie={movie}/>
}