import actionTypes from './actionTypes'
// import axios from 'axios';

export const getInputChangeAction = (value)=>({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = (value)=>({
    type: actionTypes.ADD_TODO_ITEM,
    value
})

export const getRemoveItemAction = (index)=>({
    type: actionTypes.DELETE_TODO_ITEM,
    index
})

export const getItemListAction = (data)=>({
    type: actionTypes.LIST_ITEM,
    data
})

export const TodoListAxios = ()=>({
    type: actionTypes.AXIOS_LIST,
})

// export const getTodoListAxios = ()=>{
//     //當呼叫store.dispatch會自動接收dispatch涵式
//     return (dispatch)=>{
//         axios.get('http://localhost.charlesproxy.com:3000/api/todolist')
//         .then((res)=>{
//             // console.log(res)
//             const data=res.data;
//             const action = getItemListAction(data);
//             dispatch(action);
//         })
//     }
// }