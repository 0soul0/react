import { Component, Fragment } from "react";
import { CSSTransition,TransitionGroup } from "react-transition-group";
import './toggle.css'

class Toggle extends Component{

    constructor(props){
        super(props)
        this.state={
            show:true,
            list:[]
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
    }

    render(){
        return(
            <Fragment>
                 {/* <div className={this.state.show?"show":"hide"}>hello</div> */}
                 {/*unmountOnExit 消失後不占空間  
                    onEntered 入場動畫結束時觸發 el== <div>hello</div>
                    appear 第一次進入這畫面時執行 搭配fade-appear
                 */}

                 {/*1. show->hide 
                 <CSSTransition in={this.state.show} timeout={200} classNames="fade" unmountOnExit onEntered={(el)=>{el.style.color='blue'}} appear={true}>
                    <div>hello</div>
                 </CSSTransition>
                 <button onClick={this.handleToggle}>toggle</button> */}
                 {/* 群組動畫 */}
                <TransitionGroup>
                     {this.state.list.map((item,index)=>{
                        return (
                            <CSSTransition in={this.state.show} timeout={200} classNames="fade" unmountOnExit onEntered={(el)=>{el.style.color='blue'}} appear={true} key={index}>
                                <div>{item}</div>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
                
                 <button onClick={this.handleAdd}>Add</button>
            </Fragment>
           
        );
    }
    // 切換
    handleToggle(){
        this.setState((prevState)=>({
            show:prevState.show?false:true
        }))
    }

    handleAdd(){
        this.setState((prevState)=>({
            list:[...prevState.list,"item"]
        }))
    }

}

export default Toggle