import { useGreeting } from '../context/GreetingContext'

function GreetingForm() {
    const { greeting, setGreeting }  = useGreeting();

    return (
        <div className='demo'>
            <input
                type="text"
                value={greeting}
                onChange={(e)=>setGreeting(e.target.value)}
                placeholder='인사말을 바꿔보세요'
            />
        </div>
    )
}
export default GreetingForm;