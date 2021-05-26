// ES6寫法
// import React,{Component} from 'react';

// class App extends Component{
//   render(){
//     return (
//       <div>
//         hello world
//       </div>
//     );
//   }
// }
// 16版寫法
// import React from 'react';
// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         hello world
//       </div>
//     );
//   }
// }

function App() {
  return (
    //JSX語法<div> 在JS裡寫html語法就叫JSX
      <div>
        hello world
      </div>
    );
}

export default App;
