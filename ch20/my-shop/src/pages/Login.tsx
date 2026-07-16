import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Login.tsx 페이지 오기전에 직전 페이지 주소가 있으면 그 주소사용 아니면 루트( / ) 이동 
    // 직전 페이지 정보는 location.state.from 
    const from = (location.state as { from? : string} | null)?.from ?? '/';

    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {

    }
    
    return (
        <div className='stack'>
            <div className='page-head'>
                <h1>로그인</h1>                
            </div>
            <p className='muted'>데모용 - 어떤이메일/패스워드 로그인가능</p>
            <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor='email'>이메일</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e)=>setEamil(e.target.value)}
                        placeholder='you@email.com'
                        required
                    />
                </div>
            </form>
        </div>
    )
}