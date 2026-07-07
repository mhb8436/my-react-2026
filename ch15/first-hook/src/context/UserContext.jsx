import { createContext, useContext, useState } from 'react';

// 채널을 생성했다 사용자정보를 하위 엘리먼트에게 전송할 채널 
const UserContext = createContext(null);

// App.jsx <UserProvider><Layout/></UserProvider>
// value 를 하위 컴포넌트에게 던질 준비가 완료 
export function UserProvider({children}) {
    const [userName, setUserName] = useState("수진");
    const value = {userName, setUserName};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
    const context = useContext(UserContext); 
    if(context == null){
        throw new Error(`useUser는 <UserProvider> 내에서만 사용할 수 있어요`)
    }
    return context
}

export default UserContext;