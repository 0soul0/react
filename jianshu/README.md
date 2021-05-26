#### 安裝styled-components套件
## 管理樣式套件 因為在react只要其中一個組件引入css全部都會相通
## 為了防止不同組件css互相衝突
npm install --save styled-components

### immutable.js 
## https://github.com/immutable-js/immutable-js
## https://immutable-js.github.io/immutable-js/
## 防止變數被改變
npm install immutable --save

### redux-immutable
## https://github.com/gajus/redux-immutable
## 讓immutable可以和redux語法統一為immutable對象而不是js對象
npm install redux-immutable --save

### iconfont工具
## https://www.iconfont.cn/
## icon 製作
## 複製 .eot檔 .svg檔 .ttf檔 .woff檔 .css檔
## .css檔改成.js 並設成全局文件

### 安裝 react-router-dom
## https://www.npmjs.com/package/react-router-dom
## react 的路由 react-router 
## 包含 react-router-dom 和 react-router-native
npm install --save react-router-dom

### 安裝 react-loadable
## https://github.com/jamiebuilds/react-loadable
## 異步組件
## 由於react 會一次加載所有(bundle.js)js會造成速度下降EX:進入首頁會一次加走所有頁面
yarn add react-loadable