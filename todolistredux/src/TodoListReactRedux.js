// import { Component } from 'react';
// import store from './storeReactRedux';
import {connect} from 'react-redux';
import {getChangeInputValueAction,getAddInputValueAction,getDeleteInputValueAction} from './storeReactRedux/actionCreateor'

const TodoListReactRedux=(props)=>{
    const {inputValue,changeInputValue,handleDelete,handleClick,list}= props;

    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}></input>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {list.map((item,index)=>{
                    return (
                        <li onClick={handleDelete.bind(this,index)} key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>

    );
}


//把值映射到TodoListReactRedux
const mapStateToProps = (state)=>{
    return {
         inputValue: state.inputValue,
         list:state.list
    }
}

// store.dispatch 
const mapDispatchToProps = (dispatch)=>{
    return {
        changeInputValue(e){
            // console.log(e.target.value)
            const action = getChangeInputValueAction(e.target.value)
            dispatch(action);
        },

        handleClick(){
            const action = getAddInputValueAction()
            dispatch(action)
        },

        handleDelete(index){
            const action=getDeleteInputValueAction(index)
            dispatch(action)
        }
    }
}

//連接父傳來的store
export default connect(mapStateToProps,mapDispatchToProps)(TodoListReactRedux);