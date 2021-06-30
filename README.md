# Linked In Clone

Build LinkedIn with React TS (Firebase + Styled Components + Redux)

### Demo

[LinkedIn Clone](https://linkedin-clone-26edd.web.app/)

### Description

Type을 더해 리덕스를 사용해보고 Firebase Auth, Database, Storage를 활용해 유저인증, 포스트 업로드 및 이미지, 비디오 저장소 빌딩하기<br>

### Preview

<img src="/images/preview.PNG" width="600" height="400" />

### Technology Stack

| Frontend |    Technology     |       Description       |
| :------: | :---------------: | :---------------------: |
|    01    |       React       |          +CRA           |
|    02    |     Firebase      | Auth, Database, Storage |
|    02    | Styled Components |           CSS           |
|    03    |       Redux       | Global State Management |

### Directory Structure

```
.firebase
build
node_modules
public
|-- images
src
|-- actions
|   |-- actionType.ts
|   |-- articleAction.ts
|   |-- index.ts
|   |-- userAction.ts
|-- components
|   |-- header.ts
|   |-- home.ts
|   |-- leftside.ts
|   |-- login.ts
|   |-- main.ts
|   |-- post-modal.ts
|   |-- rightside.ts
|-- reducers
|   |-- articleReducer.ts
|   |-- index.ts
|   |-- userReducer.ts
|-- store
|   |-- index.ts
|-- App.css
|-- App.tsx
|-- firebase.tsx
|-- index.css
|-- index.tsx
...
```

### Log In Page

- Firebase Authenticate와 Google Provider를 사용한 회원가입, 로그인 그리고 로그아웃 구현

- 로그인 완료 시, `Home Page`로 리다이렉트

### Home Page

- Firebase Database Article 컬렉션 생성

  Article -> User | Video | Image 데이터 저장

- Firebase Storage Images 디렉토리 생성

  Image File Upload 저장
