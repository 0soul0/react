import {fromJS} from 'immutable'
import {actionType} from '/'
const defaultSate =fromJS({
    loing: false
});


const reducer=(state=defaultSate,action)=>{
    switch(action.type){
        case actionType.LOGIN:
            return state.set('login',action.data)
        case actionType.LOGOUT:
            return state.set('login',false)
        default:
            return state;
    }
}

export default reducer;