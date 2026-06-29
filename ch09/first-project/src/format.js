// format.js — 글자를 다듬는 작은 도구 모듈 (화면 코드는 없습니다)

// 이름 뒤에 "님"을 붙여 돌려줍니다.
export function withHonorific(name) {
  return `${name}님`;
}

// 남은 개수를 한 문장으로 만들어 돌려줍니다.
export function remainingText(count) {
  return `남은 할 일: ${count}개`;
}
