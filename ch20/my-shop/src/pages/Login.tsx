import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import loginJson from '../data/login.json';

const LOGIN_IMAGES = loginJson as string[];

function pickRandom(images: string[]) : string {
    const rand = Math.floor(Math.random() * images.length);
    // Math.random 임의늬 난수 발생 -> 0 ~ 1 사이의 난수 
    // * images.length  0 ~ 4  -> Math.floor 정수 0, 1, 2, 3 
    return images[rand];
}

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Login.tsx 페이지 오기전에 직전 페이지 주소가 있으면 그 주소사용 아니면 루트( / ) 이동 
    // 직전 페이지 정보는 location.state.from 
    const from = (location.state as { from? : string} | null)?.from ?? '/';

    const [heroImage] = useState(()=>pickRandom(LOGIN_IMAGES));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        setSubmitting(true)
        try{
            await login(email, password);
            navigate(from, {replace: true})
        }catch(e){
            
        }finally{
            setSubmitting(false)
        }
    }
    
    return (
        <div className='stack'>
            <div className='login-image'>
                <img src={heroImage}/>
            </div>
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
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='you@email.com'
                        required
                    />
                </div>
                <div className='field'>
                    <label htmlFor='password'>패스워드</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder='비밀번호'
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className='btn btn-primary btn-block'
                    disabled={submitting}
                >{submitting ? '로그인 중...': '로그인'}</button>
            </form>
        </div>
    )
}