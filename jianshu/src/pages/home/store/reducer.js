import {fromJS} from 'immutable'
import {actionType} from '/'
const defaultSate =fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false
});

const chnageHomeData = (state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
    })
}


const reducer=(state=defaultSate,action)=>{
    switch(action.type){
        case actionType.CHANGE_HOME_DATA:
            return chnageHomeData(state,action);
        case actionType.ADD_HOME_LIST:
            // console.log(action.list)
            return state.merge({
                articleList:state.get('articleList').concat(action.list),
                page:action.page
            })
        case actionType.CHANGE_BACK_TOP:
            return state.set('showScroll',action.show)
        default:
            return state;
    }
}

export default reducer;