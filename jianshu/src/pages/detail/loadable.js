//異步加載js組件
import React from 'react';
import Loadable from 'react-loadable';

// import {Component} from 'react';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
    //加載內容
    loader: () => import('./'),
    //加載過程中顯示組件
    loading(){
        return <div>正在加載</div>
    },
});
export default ()=><LoadableComponent/>

// export default class App extends Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }
