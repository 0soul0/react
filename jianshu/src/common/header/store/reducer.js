import * as actionType from './actionType';
// 訪止state被直接更改
import {fromJS} from 'immutable';
const defaultState=fromJS({
    focused: false,
    mouseIn: false,
    list:[],
    page: 1,
    totalPage: 0
})

const reducer = (state=defaultState,action)=>{
    // const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case actionType.SEARCH_FOCUSED:
            return state.set('focused',true);
        case actionType.SEARCH_BLUR:
            return state.set('focused',false);
        case actionType.CHANGE_LIST:
            //此寫法性能更好
            //state.set('list',action.data)
            //     .set('totalPage',action.totalPage);
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case actionType.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionType.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionType.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}

export default reducer;