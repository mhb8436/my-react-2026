import { createContext, useContext, useState} from 'react';

const GreetingContext = createContext(null);

export function GreetingProvider( {children })  {
    const [greeting, setGreeting] = useState("안녕하세요")

    const value = {greeting, setGreeting}
    return <GreetingContext.Provider value={value}>
        {children}
    </GreetingContext.Provider>
}

export function useGreeting() {
    const context = useContext(GreetingContext);
    if(context=== null) {
        throw new Error(`useGreeting은 <GreetingProvider> 에서만 사용가능해요`)
    }
    return context;
}
export default GreetingContext;