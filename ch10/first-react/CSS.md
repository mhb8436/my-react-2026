# 10장 CSS
## index.css

```jsx
<p className="role">역할</p>
```
role className 을 정의한겁니다.

```css

.role {
  margin: 0 0 12px;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem; /* 속성 : font-size, 값은 0.9 rem 본문의 글자크기 rem(일반 본문 폰트를 1로(16px) 했을때 상대적 다뉘) px */
  padding: 16px 20px  /* padding  값은 16px, 20px */
}
 
/* document.querySelector("#id")
document.querySelector(".className") */

선택자 {
    속성: 값;
    속성: 값;

}

body  : 본문 body 태그에 전체적용 

* : 전체 요소에 적용

.app : className="app" 만 적용되는 속성 

.profile-card h3 : className="profile-card" 요소 내에 자손요소 중에서 <h3> 태그 모두에게 적용되는 속성 

.profile-card .role : className="profile-card" 요소 내의 자손 요소 중에서 className="role" 요소에게만 적용되는 속성이라고 보시면되요

.section > h2  : className="section" 요소 내 자손 요소 중에서 첫번째 <h2> 요소에 적용되는 속성이라는 의미 


```
### 핵심구분
- 점 ( . ) 이 붙으면 클래스 이름, 아니면 HTML 요소
공백 : A B A 안에 어디있든 B(손자요소까지 전부) 적용된다.
A > B : A 요소 안에 바로 아래 있는 (직계자식)에게만 적용된 속성 

## 박스 모델 
- content : 글자 이미지 등 실제 내용ㅇ
- padding : 내용과 테두리 사이의 안쪽 여백 공간
- border : 실제 테두리선 
- margin : 다른 요소와 벌어지는 바깥 여백 

```css
.profile {
    padding: 0; 네 방향 모두 안쪽 여백이 0 
    padding: 16px 20px; 위아래 16, 좌우 20px
    padding: 32px 20px 64px : 위 32, 좌우  20px, 아래 64px ;
    margin : 0 0 20px /* 위 0, 좌우 0 아래 2px */
}
```

## 색과 CSS 
- 16 진수 : #ffffff, #999999
- rgba : rgba(0,0,0, 0.04) red : 0 - 255, green : 0 - 255, blue : 0 - 255

```css

    :root { /* 선언 : 이름 -- 로 시작 */
        --accent: #4f6df5
    }
    .profile-card .role {
        color : var(--accent); /* var (이름)*/
    }
```


## flexbox - 가로로 늘어놓기 
```css
    .card-list {
        display: flex ; /* 자식들을 가로 한줄 배치 */
        flex-wrap: wrap; /* 한줄에 안들어가면 다음 줄로 넘겨라 */
        gap: 16px; /* 자식들 사이 간격 */
    }
```


## 테두리 모리서 
```css
.profile-card {
    background: var(--card-bg);
    border: 1px solid var(--line); /* 테두리를 1px 굵기로 */
    border-radius: 14px; /* 사각형의 모서리를 둥글게 하는데 반경은 14px */
    padding: 18px 20px; 
    width: 220px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); 
    /* 그림자 속성 0 가로 이동 1px 세로 이동 , 3px 번짐, rgb 투명도  */
}
```