import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import Toggle from './Toggle';
import ReactHook from './ReactHook'
//#region  範例
// import App from './App';
//效能測試
// import reportWebVitals from './reportWebVitals';
//jsx寫法以標籤掛載相依react庫 EX:<App />
//<App /> 為我們自訂義標籤必須大寫開頭
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//#endregion

//todolist
// ReactDOM.render(<TodoList/>,document.getElementById('root'))
const Appc = [
    <Toggle/>,
    <ReactHook/>
]
ReactDOM.render(Appc,document.getElementById('css'))