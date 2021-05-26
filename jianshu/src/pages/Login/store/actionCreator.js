import axios from 'axios';
import {actionType} from '/'
// == import {fromJS} from 'immutable'
// import {fromJS} from 'immutable'


export const loginAction =(data)=>({
    type:actionType.LOGIN,
    data
})

export const logout=()=>({
    type:actionType.LOGOUT
})

export const login = (account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            const result = res.data.data;
            if (result){
                dispatch(loginAction(result))
            }else{
                alert('登入失敗')
            }
        })
    }
}