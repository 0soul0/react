### 安裝 Ant Design of React 
## 基本組件樣式
npm install antd
or
yarn add antd

### 安裝 Redux
## 數據庫
yarn add redux

### 安裝 React-Redux
## 第三方模塊讓React更方便使用Redux
npm install --save redux react-redux
or
yarn add react-redux

### 安裝 chrome redux開發工具 
## https://github.com/reduxjs/redux-devtools
## https://github.com/reduxjs/redux-thunk
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en-US
# 配置
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

### 安裝 redux-thunk 
## https://github.com/reduxjs/redux-thunk
## 在action裡面使用異步涵式
## redux-thunk 中間層
npm install redux-thunk

### 安裝 redux-saga 
## https://github.com/redux-saga/redux-saga
## 和redux-thunk相同 差別在於thunck把異步涵式放在action 
## saga另外放在一個文件裡
## 較複雜但是較多api可以使用和管理較複雜邏輯
npm install redux-saga
or
yarn add redux-saga