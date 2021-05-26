import {SEARCH_FOCUSED,SEARCH_BLUR,CHANGE_LIST,MOUSE_ENTER,CHANGE_PAGE,MOUSE_LEAVE} from './actionType';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList=(data)=>({
    type:CHANGE_LIST,
    //把資料轉成immutable 
    //因為state裡面的陣列一樣是immutable
    data:fromJS(data),
    totalPage: Math.ceil(data.length/6)
})

export const focusedSearch=()=>({
    type:SEARCH_FOCUSED
})

export const blurSearch=()=>({
    type:SEARCH_BLUR
})

export const mouseEnter=()=>({
    type:MOUSE_ENTER
})

export const mouseLeave=()=>({
    type:MOUSE_LEAVE
})

export const changePage=(page)=>({
    type:CHANGE_PAGE,
    page
})

//react-thunk 寫法
export const getList=()=>{
    return (dispatch)=>{
        axios.get("/api/headerList.json")
        .then((res)=>{
            const data=res.data
            if(data.success){
                dispatch(changeList(data.data))
            }
        }).catch(()=>{
            console.log('error')
        })
    }
}