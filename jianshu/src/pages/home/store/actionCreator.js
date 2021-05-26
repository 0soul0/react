import axios from 'axios';
import {actionType} from '/'
// == import {fromJS} from 'immutable'
import {fromJS} from 'immutable'
const changeHomeData =
(result)=> ({
    type:actionType.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

export const getList=()=>{
    return (dispatch)=>{
        axios.get('api/home.json')
        .then((res)=>{
            const result =res.data.data;
            dispatch(changeHomeData(result))
        })
    }
}

const addHomeList =(list,page)=>({
    type:actionType.ADD_HOME_LIST,
    list:fromJS(list),
    page:page
})

export const getMoreList = (page)=>{
    return (dispatch)=>{
        axios.get('api/homeList.json?page='+page)
        .then((res)=>{
            const result =res.data.data;
            dispatch(addHomeList(result,page+1))
        })
    }
}

export const toggleTopShow = (show)=>({
    type:actionType.CHANGE_BACK_TOP,
    show
})