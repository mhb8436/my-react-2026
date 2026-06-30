function ProfileCard({name, role, hobbies}) {
    // name : 이름  string
    // role : 역할  string
    // hobbies: 취미는 배열 ["요리","독서","영화","넷플릭스"]
    return (
        <div className="profile-card">
            <h3>{name}</h3>
            <p className="role">{role}</p>

            <p className="label">취미</p>

            <ul className="hobby-list">
                {hobbies.map((hobby)=> {
                    return (
                        <li key={hobby}>{hobby}</li>
                    )
                })                
                }
                {/* 
                    <li key={요리}>{요리}</li>
                    <li key={독서}>{독서}</li>
                    <li key={영화}>{영화}</li>
                    <li key={넷플릭스}>{넷플릭스}</li>
                */}
            </ul>
        </div>
    )
}

export default ProfileCard;