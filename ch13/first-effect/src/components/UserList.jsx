import { useState, useEffect } from 'react';

function UserList() {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    // 이함수는 async/await 로 promise 사용할꺼야
    const loadUsers = async () => {
        try{
            // 여기서 에러가 나더라도 프로그램을 종료하지 않게 
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

            if(!res.ok){ // 서버에서 응답이 제대로 안올 경우 처리 
                throw new Error(`서버 응답 오류 : ${res.status}`)
            }

            const data = await res.json();
            console.log(data)
            setUsers(data);
        }catch(e){
            console.error(e);
            setError(e.message); // e 에는 에러 객체, e.message 에러 내용이 담겨 있습니다.
        }finally{
            console.log("finally - 예외가 나든 안나든 무조건 이 구문을 실행해" );
            setLoading(false); // 성공이든 실패든 불러오기는 끝났어~
        }
    }

    // 첫번째 인자는 화면 렌더링이 끝난 뒤에 실행할 코드
    // 두번째 인자는 언제 다시 실행할지 결정하는 의존성값들을 배열
    // 두번째 인자 [] 와 같이 빈배열이 들어가면 화면이 렌더링될 때 딱 1번만 실행 됩니다. 
    useEffect(()=>{
        loadUsers();
    }, []); 
    // useEffect 는 화면 렌더링과 직접 적인 관련이 없는 부수 효과를 React 에서 사용할때
    // 부수효과라는 
    //  1. 서버에서 데이터 가지고오기
    //  2. 타이머  구독 등록 
    //  3. 브라우저에 있는 localStorage, sessionStorage 
    //  4. 이 컴포넌트가 사라질때 (클린업이 필요할때)

    if(loading) {
        return (
            <div className='demo'>
                <p className='status-loading'> 사용자 목록을 불러오는 중입니다. </p>
            </div>
        );// return 구문을 만나면 아래 코드는 실행이 되지 않아요.
    }

    if(error){ // error 가 문자열이고 값이 있으면 무조건 여기를 탑니다. null이거나 빈 문자열일 경우에는 여기를 안탑니다.
        return (
            <div className='demo'>
                <p className='status-error'> 불러오기에 실패했습니다. </p>
            </div>
        )
    }

    return (
        <div className='demo'>
            <p className='hint'>서버에서 받아온 사용자 </p>
            <ul className='user-list'>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <div className='name'>{user.name}</div>
                            <div className='email'>{user.email}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserList;