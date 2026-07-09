import { Link } from 'react-router-dom';

export default function MovieDetailView({ movie }) {
    const hasPoster = movie.Poster && movie.Poster !== 'N/A';

    return (
        <div className='container'>
            <Link to="/" className='back-link'>검색으로 돌아가기</Link>
            <div className='detail'>
                <div className='detail-poster'>
                    {hasPoster ? (
                        <img src={movie.Poster} />
                        ): (
                        <div className='poster-empty big'>포스터 없음</div>
                        )
                    }
                </div>
                <div className='detail-body'>
                    <h1>{movie.title}</h1>
                    <p className='muted'>
                        {movie.Year}
                        {movie.Genre}
                        {movie.Director ? ` - 감독은 ${movie.Director}`:''}
                    </p>
                    {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                        <p className='rating'>평점은 {movie.imdbRating} / 10</p>
                    )}
                    <p className='plot'>{movie.Plot || '줄거리 정보가 없어요'}</p>
                </div>
            </div>
        </div>
    )
}