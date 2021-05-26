import {fromJS} from 'immutable'
import {actionType} from '../store'
const defaultSate =fromJS({
    title:'',
    content: ''
});


const reducer=(state=defaultSate,action)=>{
    switch(action.type){
        case actionType.ADD_DETAIL:
           return state.merge({
                title:fromJS(action.data.title),
                content:fromJS(action.data.content)
            })
        default:
            return state;
    }
}

export default reducer;