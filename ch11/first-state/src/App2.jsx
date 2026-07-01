import Counter from "./components/Counter";
import Password from './components/Password';
import Toggle from './components/Toggle';
import TextCounter from "./components/TextCounter";
import StepCounter from "./components/StepCounter";
import DoubleCounter from "./components/DoubleCounter";

function App() {
    return (
        <div className="app">
            <h1>11장 - useState 공부하기</h1>
            <section className="section">
                <h2>카운터 컴포넌트</h2>
                <Counter/> 
            </section>
            <section className="section">
                <h2>패스워드 보이기/숨기기</h2>
                <Password/> 
            </section>
            <section className="section">
                <h2>좋아요 및 좋아요 취소</h2>
                <Toggle/> 
            </section>
            <section className="section">
                <h2>글자수 보이기</h2>
                <TextCounter/> 
            </section>

            <section className="section">
                <h2>+2카운터</h2>
                <StepCounter/> 
            </section>

            <section className="section">
                <h2>두배 카운터</h2>
                <DoubleCounter/> 
            </section>
        </div>
    )
}

export default App;
