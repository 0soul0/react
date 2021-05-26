import {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import TodoListUI from './TodoListUI';

// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
//import actionTypes from './store/actionTypes'
import {getInputChangeAction,getAddItemAction,getRemoveItemAction,TodoListAxios} from './store/actionCreator'
class TodoList extends Component{
    
    constructor(props){
        super(props)
        this.state = store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleRemoveItem=this.handleRemoveItem.bind(this);
        //當數據變動時會調用此方法
        store.subscribe(this.handleStoreChange);
    }

    render(){
        
        return(
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleRemoveItem={this.handleRemoveItem}
            />
        );
    }

    componentDidMount(){
         const action =TodoListAxios();
         store.dispatch(action);
        // const action = getTodoListAxios();
        //  //同時也會傳送dispatch涵式給action
        // store.dispatch(action);
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        //把資料傳給 store store 會自動把資料傳給reducer
        store.dispatch(action);
    }

    //更新state
    handleStoreChange(){
        this.setState(store.getState())
    }

    //提交
    handleBtnClick(){
        const action = getAddItemAction()
        store.dispatch(action);
    }

    //刪除
    handleRemoveItem(index){
        const action = getRemoveItemAction(index)
        store.dispatch(action)
    }

}

export default TodoList