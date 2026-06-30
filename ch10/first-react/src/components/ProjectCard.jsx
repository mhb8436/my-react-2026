import SkillBadge from "./SkillBadge"; 
// ./ 현재 디렉토리에서 import 할 파일을 찾으세요 
// ../ 현재 디렉토리가 아니라 부모디렉토로 올라서 찾으세요 

function ProjectCard({name, desc, todos}){
    return (
        <div className="profile-card">
            <h3>{name}</h3>
            <p className="role">{desc}</p>

            <p className="label"> 할일 목록</p>
            <div className="badge-list">           
                {
                    todos.map((todo)=> {
                        return (
                            <SkillBadge key={todo} 
                                skill={todo}/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProjectCard;