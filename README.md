ThemeHandler.js
===============

##### 아래의 시계 프로젝트를 진행하며 만든  ThemeHandler.js를 라이브러리로 공유 해봅니다!
###### 아직 시계프로젝트는 미완성 입니다 :)


![시연](https://user-images.githubusercontent.com/65354945/135280330-38e9bb19-1e13-4edf-9721-c655b656c56a.gif)


* ###### 바닐라 자바스크립트로 만든 다크모드,라이트 모드 핸들러
* MIT LICENSE


# **example**
### usage
```javascript
import {ThemeHandler} from "./ThemeHandler.js";
  
const light = {
    background: [
        {
            elem: 'body',
            color: 'white'
        }
    ],
    font: [
        {
            elem: 'h1',
            color: 'purple'
        }
    ]
};

const night = {
    background: [
        {
            elem: 'body',
            color: 'black'
        }
    ],
    font: [
        {
            elem: 'h1',
            color: 'white'
        }
    ]
};


let handler = new ThemeHandler(light, night);
handler.autoDetect(); //실시간 테마변경 감지
```

[적용 사이트 DEMO](https://theme-handler.netlify.app)





| 매소드 | 기능 | 
|---|:---:|
| `detectTheme` | 로딩시 테마감지 (기본적용) | 
| `autoDetect` | 실시간으로 테마변경 감지 |  
| `currentMode` | 현재 테마상태를 반환 |  
| `changeTheme` | 전달인자 light / night |  


```javascript
night = { // 다크모드
    background: [
        {
            elem: '',//element, class, id
            color: ''//어둡게 바꾸고 싶은 배경 색
        }
    ],
    font: [
        {
            elem: '',//element, class, id
            color: ''//어둡게 바꾸고 싶은 폰트 색
        }
    ]
};



light = { // 라이트 모드
    background: [
        {
            elem: '',//element, class, id
            color: ''//밝게 바꾸고 싶은 배경 색
        }
    ],
    font: [
        {
            elem: '',//element, class, id
            color: ''//밝게 바꾸고 싶은 폰트 색
        }
    ]
};
```