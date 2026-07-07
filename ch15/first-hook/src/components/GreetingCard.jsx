import { useGreeting } from '../context/GreetingContext'

function GreetingCard() {
    const {greeting} = useGreeting();

    return (
        <div className='demo'>
            <p className='greeting'>{greeting}</p>
        </div>
    )
}
export default GreetingCard;