# Install New Project
npm create vite@latest 


# css update
[github.com/mhb8436/my](https://github.com/mhb8436/my-react-2026)

ch15에 first-hook/src/index.css 

# React Hook 

useState : 상태를 컴포넌트로 연결한다 -> 화면에서 보여줄 변화하는 값을 기억, 바뀌면 다시 그려줘줌
useEffect : API 호출 할때, 타이머 등등 화면 렌더링관 관련 없는 일을 처리
use 커스텀 훅을 만들어 볼꺼에요 : function 함수

```javascript
// 컴포넌트 A 
const [count, setCount] = useState(0)
const [posts, setPosts ] = useState([])
// ... 여러개의 useState 가 정의 

// 컴포넌트 B
const [count, setCount] = useState(0)
const [posts, setPosts ] = useState([])
// ... 여러개의 useState 가 정의 

// 컴포넌트 C
const [count, setCount] = useState(0)
const [posts, setPosts ] = useState([])
// ... 여러개의 useState 가 정의 

// 이런 로직을 모아서 한군데서 처할 수 있게 만든 함수가 커스텀 훅이라고 
```


# CreateContext 퀴즈
UserContext 처럼 멀리 떨어진 두개의 컴포넌트가 같은 인사말을 공유할 수 있께 만들어보세요

- 한쪽 : 인사말 입력
- 다른쪽: 인사말 표시
- props 로 전달하지 말고 Context 연결

context/GreetingContext.jsx - Context, Provider, useGreeting 
components/GreetingForm.jsx - 인사말을 입력 
components/GreetingCard.jsx - 인사말이 표시 
App.jsx - 수정 -> GreetingProvider 로 감싸기 

```javascript
    // GreetingContext.jsx
    const [greeting, setGreeting] = useState("안녕하세요")

    // App.jsx
    <Layout>
        <GreetingForm/>
        <GreetingCard/>
    </Layout>   
     
    <GreetingProvider>
        <Layout/>    
    </GreetingProvider>

```
결과 
[입력화면] -> 안녕하세요 : GreetingForm -> UserHeader.jsx

"안녕하세요" - GreetingCard   -> UserGreeting.jsx 