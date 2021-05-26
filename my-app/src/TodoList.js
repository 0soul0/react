import { Component, Fragment } from "react";
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
    }

    // 被掛載前執行只執行一次
    UNSAFE_componentWillMount(){
        // console.log('1.UNSAFE_componentWillMount');
    }

    // 被掛載後執行且只執行一次
    componentDidMount(){
        // console.log('3.componentDidMount');
        // adjax 建議放在componentDidUpdate
        // 也可放UNSAFE_componentWillMount或constructor
        // 但未來同構時會很難處理
        axios.get('http://localhost.charlesproxy.com:3000/api/todolist')
        .then((res)=>{
            // console.log(res.data)
            this.setState(()=>({
                // 等於list=res.data 但下面的方式比較好
                list: [...res.data]
            }));
        })
        .catch(()=>{alert('error')})
    }
    
    //  組件
    render(){
        // console.log('2.render')
        return(
            // Fragment 代替div 在網頁上不會顯示
            <Fragment>
                <div>
                    <label htmlFor="insert">輸入內容</label>
                    <input 
                        id="insert"
                        className="input"
                        value={this.state.inputValue}
                        // bind(this) 把TodoList付值給this
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                {/* ref 取得DOM元素 */}
                <ul ref={(uli)=>{this.ul=uli}}>
                    {/* 數據變動就會更新 */}
                   {this.getTodoItem()}
                </ul>
            </Fragment>
           
        );
    }

    //  組件更新前執行 false 不更新 true 更新
    shouldComponentUpdate(){
        // console.log('a.shouldComponentUpdate');
        return true;
    }

    //  組件更新前執行 
    //  在shouldComponentUpdate之後執行
    //  shouldComponentUpdate返回false不執行 true執行
    UNSAFE_componentWillUpdate(){
        // console.log('b.UNSAFE_componentWillUpdate');
    }

    //  組件更新後執行 
    componentDidUpdate(){
        // console.log('c.componentDidUpdate');
    }
    

    getTodoItem(){
       return this.state.list.map((item,index)=>{
            // {/* <li 
            //     key={index} 
            //     onClick={this.handleItemDelete.bind(this,index)}
            //     // 轉亦html語法EX:<h1>文字</h1>=>文字
            //     dangerouslySetInnerHTML = {{__html: item}}
            //     >
            //     </li> */}
           return (
                <TodoItem 
                key = {item}
                item={item} 
                index={index} 
                deleteItem={this.handleItemDelete}/>
           )
        })
    }

    handleInputChange(e){
        const value=e.target.value
        //異步方式
        this.setState(()=>({
            inputValue: value
        }))

        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleBtnClick(){
        //prevState = this.state 上次狀態
        this.setState((prevState)=>({
            list:[...prevState.list, prevState.inputValue],
            inputValue: ''
        }),()=>{
            // 上面執行完後就會執行下面的句子
            // 取得div數量
            // console.log(this.ul.querySelectorAll('div').length)
        })

        // this.setState({
        //     //...this.state.list展開運算符 複製舊的list資料 
        //     list:[...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }

    handleItemDelete(index){
        // console.log(index)
        // // immutable state 不允許我們做何改變和未來優化有關
        // // 和性能優化有關
        // const list = [...this.state.list]
        // // splice
        // // start 增加/刪除項目的位置，負數代表從後方算起。
        // // deleteCount 刪除的個數，如為0則不會刪除。
        // // item… 添加的新項目。
        // list.splice(index,1)
        // this.setState({
        //     list:list
        // })        
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index,1)
            return {list}
        })
    }
}

export default TodoList;