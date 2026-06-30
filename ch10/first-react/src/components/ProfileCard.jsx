import SkillBadge from "./SkillBadge";

function ProfileCard({name, role, hobbies, skills}) {
    // name : 이름  string
    // role : 역할  string
    // hobbies: 취미는 배열 ["요리","독서","영화","넷플릭스"]
    // skills : ["HTML", "JAVASCRIPT", "REACT","NEXT"]
    // console.log(name, role, hobbies, skills)
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
            </ul>
            <p className="label"> 기술 스택</p>
            <div className="badge-list">
            {/* 문제 1
                hobbies 처럼 map 을 이용해서 SkillBadge의 배열을 출력해보세요 
                <li> 태그 대신에 우리가 만든 SkillBadge 컴포넌트를 배열로 만들어 출력해보세요
            */}
                {
                    skills.map((skill)=> {
                        return (
                            <SkillBadge key={skill} 
                                skill={skill}/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProfileCard;