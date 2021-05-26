import actionTypes from './actionTypes'
// 數據庫
const defaultState={
    inputValue: '123',
    list: ['1','2']
}

// reducer 可以接收state 但不能修改state
const reducer=(state=defaultState,action)=>{
    if(action.type===actionTypes.CHANGE_INPUT_VALUE){
        //複製資料
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===actionTypes.LIST_ITEM){
        //複製資料
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;
    }
    if(action.type===actionTypes.ADD_TODO_ITEM){
        //複製資料
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type===actionTypes.DELETE_TODO_ITEM){
        //複製資料
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState;
    }
    
    console.log(state)
    return state;
}

// state 目前數據 action=傳遞過來的數據
export default reducer