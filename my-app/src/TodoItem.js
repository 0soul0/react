import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        // 可以節約性能
        this.handleClick = this.handleClick.bind(this);
    }

    //  組件要從父組件接收參數
    //  父render更新時才會執行
    //  第二次父render更新才會執行
    //  之後執行shouldComponentUpdate 後面一樣
    UNSAFE_componentWillReceiveProps(){
        // console.log('a.a.child UNSAFE_componentWillReceiveProps');
    }

    // 優化性能 因為當父組件更新時子組件也會全部更新 
    // 因此可以利用shouldComponentUpdate生命週期涵式來檢查
    //  nextProps nextState只要父有傳值 就會自動接收
    // 問題:接收值都一樣卻能判斷和運作?
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.item!==this.props.item){
            //更新
            return true;
        }else{
            //不更新
            return false;
        }
    }

    // 組件被移除前時會執行
    componentWillUnmount(){
        // console.log(' child componentWillUnmount');
    }

    render(){
        //優化 等於 this.props.item 
        const {item,test} = this.props
        // {/* 此方法不推薦  onClick={this.handleClick.bind(this)*/}
        //JSX->createElement->虛擬DOM(對象)->真實DOM
        // React.createElement('div',{id:"ac"},'hello world')==<div id="ac">hello world</div>
        return (    
            <div onClick={this.handleClick}>
                    {test}-{item}
             </div>
        );
    }

    handleClick(){
        //優化 等於this.props.deleteItem 和 this.props.index
        const {deleteItem,index} = this.props;
        deleteItem(index);
    }
}
// 定義變數屬性 沒傳不會檢查
TodoItem.propTypes={
    test: PropTypes.string.isRequired,
    item: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

//默認值
TodoItem.defaultProps={
    test: "test"
}

export default TodoItem;