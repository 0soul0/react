import axios from 'axios';
// import {fromJS} from 'immutable';
import {actionType} from '../store'

const addDetail = (data)=>({
    type:actionType.ADD_DETAIL,
    data
})

export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id)
        .then((res)=>{
            // console.log(res.data.data)
            const result=res.data.data;
            dispatch(addDetail(result));
        })
    }
}