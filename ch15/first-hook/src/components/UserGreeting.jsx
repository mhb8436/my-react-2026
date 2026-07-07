import { useUser } from '../context/UserContext';

function UserGreeting() {
    const { userName } = useUser();

    return (
        <div className='demo'>
            <p className='greeting'>
                {userName} 님 오늘도 방가방가
            </p>
        </div>
    )
}
export default UserGreeting;