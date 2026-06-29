import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
// textContent : text 만 넣을 수 있고
// innerHTML : html 그대로 넣을 수 있어
// http://localhost:5173/

// --- 할일 데이터 작업 영역 입니다.-----
let todos = []; // 할일을 담을 배열 
let nextId = 1; // 할일 목록의 아이템을 식별할 수 있는 번호(게시판 번호와 같은개념)

// 할일 추가 하는 함수
// 할일 아이템 : {id :number, text : string, done: boolean}
function addTodo(text) {
  const todo = {id: nextId, text: text, done: false} // done 할일을 완료했다고 체크했을 done : true
  nextId = nextId + 1; // 다음번 nextId 를 증가시켜주는거죠... 
  todos = [...todos, todo]; // 새로운 todos 배열을 기존 todos 배열 + todo 를 넣어서 새로운 배열 생성
  return todo;
}

// 할일 완료로 업데이트 함수
function toggleTodo(id) {
  // 조건식 ? 참일경우 수행 : 거짓일 경우 수행 
  // one line if else 
  todos = todos.map((todo)=> todo.id === id ? {...todo, done: !todo.done} : todo)
}

// 할일 삭제 
function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id); 
  // filter return 값이 참인 경우에만 새로운 배열에추가 
}

// 할일 목록 
function getTodos() {
  return [...todos]
}

// 남아 있는 할일 갯수
function getRemainingCount() {
  const remain = todos.filter((todo) => todo.done === false);//남아 있는 할일 배열
  return remain.length; // 남아 있는 할일 갯수 
  // return todos.filter((todo) => todo.done === false).length
}
// ---- 화면 작업 영역 입니다. --------
const app = document.querySelector("#app")

const hello = document.createElement("p")
hello.textContent = `지훈님 환영합니다.`
app.appendChild(hello);

const todoSection = document.createElement("section"); 
// todo 주제만 모아놓은 섹션(주제별 영역)
app.appendChild(todoSection); 
// appendChild 는 해당 태그의 자식요소로 넣어라 
// <div id="app"><section></section></div>

todoSection.innerHTML = `
  <h1>Todo 모듈</h1>
  <p>todo 목록 예제입니다.</p>
  <div>
    <input id="todo-input" type="text" placeholder="할일을 입력하세요" />
    <button id="add-btn" >추가</button>
  </div>
  <p id="remaining"></p>
  <ul id="todo-list"></ul>
`

const input = todoSection.querySelector("#todo-input")
const addBtn = todoSection.querySelector("#add-btn")

// UI에서 버튼 달기 
addBtn.addEventListener("click", () => {
  // addTodo
  addTodo(input.value); // todos 배열에 할일 텍스트 입력 
  input.value = "";     // input type="text" 에는 value를 지워줘 
  input.focus();        // input type="text" 에 포커 입력 커서가 가있게 해줘 
  refresh(); // 화면을 다시 그려주세요
});

// 화면을 그리는 함수
function render(todos, remaining) {
  const list = todoSection.querySelector("#todo-list");
  todoSection.querySelector("#remaining").textContent = `남은 할 일 : ${remaining} 개`;
  // list.innerHTML = "";

  todos.forEach((todo)=> {
    // todo-list 에 할일 목록을 추가해줍니다. 
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    textSpan.style.textDecoration = todo.done ? "line-through" : "none"
    textSpan.addEventListener("click", ()=>{
      toggleTodo(todo.id);
      refresh();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.style.marginLeft = "8px"
    delBtn.addEventListener("click", () => {
      // removeTodo 호출  - 실제 데이터를 제거하는 역할
      removeTodo(todo.id)
      // 화면을 다시 갱신 - 화면만 다시 그려주는 역할 
      refresh();
    });

    li.append(textSpan, delBtn); // todo-list div에 todos 배열에서 생성한 li tag 목록을 추가 
    list.appendChild(li); // 
  });
}

//화면의 데이터를 최신으로 유지하면서, 화면 그리는 render 함수 호출
function refresh() {
  render(getTodos(), getRemainingCount())
}

refresh(); // 인입지점 - 화면 UI 그리는