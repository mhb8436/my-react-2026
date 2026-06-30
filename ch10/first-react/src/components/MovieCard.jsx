import SkillBadge from './SkillBadge';

function MovieCard({title, year, star, genre}) {
    return (
        <div className="profile-card">
            <h3>영화제목 : {title}</h3>
            <p>출시년도 : {year}</p>
            <p>별점 : {star} </p>

            <div className="badge-list">
                {
                    genre.map((g)=> (
                        <SkillBadge key={g} skill={g}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieCard;