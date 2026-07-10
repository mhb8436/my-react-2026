import {Link} from 'react-router-dom'

export default function MovieCard({movie}) {

    const hasPoster = movie.Poster && movie.Poster !== 'N/A';
    const liked = false;
    function handleHeart(e) {
        e.preventDefault(); // 카드가 링크로 감싸져 있어서, 상세화면으로 넘어가는것을 방지
        e.stopPropagation(); // 클릭이 카드로 번지는것을 방지 
    }
    return (
        <Link to={`movie/${movie.imdbID}`} className='movie-card'>
            <div className='poster'>
                {
                hasPoster ? 
                    (<img src={movie.Poster} alt={`${movie.Title} 포스터`}/>) 
                    : 
                    (<div className="poster-empty">포스터없음</div>)
                }
                <button
                    className={`heart ${liked ? 'on' : ''}`}
                    onClick={handleHeart}
                >
                    {liked ? '해제': '추가'}
                </button>
            </div>
            <div className='movie-info'>
                <h3>{movie.Title}</h3>
                <p className='muted'>{movie.Year}</p>
            </div>
        </Link>
    )
}