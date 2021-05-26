// 數據管理
import { createStore, applyMiddleware,compose } from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas.js'

 // 配置數chrome redux據監控 為了和thunk或redux-saga是合併使用
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

// redux-saga
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
  );


const store = createStore(
    reducer,
    enhancer
    // 配置數chrome redux據監控
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

// then run the saga
sagaMiddleware.run(todoSagas)

export default store;