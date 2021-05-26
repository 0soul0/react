import Header from './common/header';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/Login';
import Write from './pages/write';
function App() {
  return (
    <Provider store={store}>
    
      <BrowserRouter>  
        <Header></Header>
        {/* exact 要完全和path一樣 如果沒加會是包含path */}
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/Write' exact component={Write}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
