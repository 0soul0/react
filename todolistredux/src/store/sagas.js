import { put, takeEvery } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {getItemListAction} from './actionCreator';
import axios from 'axios';

function * getInitListAxios(){
  //yield==wait
  try{
    const res = yield  axios.get('http://localhost.charlesproxy.com:3000/api/todolist');
    const action=getItemListAction(res.data);
    yield put(action);
  }catch(e){
    console.log('list 網路請求失敗')
  }
  
  // axios.get('http://localhost.charlesproxy.com:3000/api/todolist')
  //         .then((res)=>{
  //             // console.log(res)
  //             const data=res.data;
  //             const action = getItemListAction(data);
  //             //dispatch==put
  //             put(action);
  //         })
}

function* mySaga() {
  //saga中間建接收到type==actionTypes.LIST_ITEM 利用takeEvery執行getInitList
  yield takeEvery( actionTypes.AXIOS_LIST, getInitListAxios);
}
  
  export default mySaga;