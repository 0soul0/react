import { CSSTransition } from "react-transition-group";
import {connect} from 'react-redux';
import {actionCreater}  from './store';
import {actionCreator as loginActionCreater} from '../../pages/Login/store'
import { Component } from "react";
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchIntoTitle,
    SearchWrapper,
    SearchIntoSwitch,
    SearchInfoItem
} from './styled'


class Header extends Component{

    render(){
        const {focused ,handleInputFocus,handleInputBlur,list,login,logout} = this.props

        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/> 
                </Link>
                
                <Nav>
                    <NavItem className='left active'>首頁</NavItem>
                    <NavItem className='left'>下載APP</NavItem>
                 
                         {
                             login ?<Link onClick={logout} to='/'><NavItem className='right'>登出</NavItem>  </Link>:<Link to='/login'><NavItem   className='right'>登入</NavItem></Link>
                        }
                  
                   
                    <NavItem className='right '><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            timeout={200} 
                            in={focused} classNames="slide">
                             <NavSearch 
                             className={focused?'focused':''}
                             onFocus={()=>handleInputFocus(list)}
                             onBlur={handleInputBlur}
                             ></NavSearch>
                        </CSSTransition>
                            <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe692;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                  
                </Nav>
                <Addition>  
                    <Link to='/write'>
                           <Button className='writting'>
                         <i className="iconfont">&#xe617;</i>
                            寫文章</Button>
                    </Link>
                 
                    <Button className='reg'>註冊</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    getListArea = (show)=>{
        const {list,page,handleMouseEnter,handleMouseLeave,mouseIn,totalPage,handleChangePage} = this.props;
        //把immutable對象轉成js對象
        const listJs = list.toJS();
        const pageList=[];
        if(listJs.length){
             for(let i=(page-1)*6;i<page*6;i++){
                pageList.push(
                <SearchInfoItem key={listJs[i]}>{listJs[i]}</SearchInfoItem> 
                )
            }
        }
       

        if(show||mouseIn){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchIntoTitle>
                        熱門搜尋
                        <SearchIntoSwitch onClick={()=>handleChangePage(totalPage,page,this.spinIcon)}>
                            {/* ref 獲取物件DOM icon可以自定名稱 */}
                        <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe693;</i>
                        換一換
                        </SearchIntoSwitch>
                    </SearchIntoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        //state.header.focused js獲取方式
        // 但是改成immutable對象 
        // immutable 獲取資料方式
        // ==state.get('header').get('focused')
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login','login']),
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        logout(){
            dispatch( loginActionCreater.logout())
        },
        handleInputFocus(list){
           //當資料空時 才請求
            // if(list.size == 0){
            //      //搜尋推薦資料
            //     dispatch(actionCreater.getList())
            // }
            // 下面寫法同上面
            (list.size === 0)&&dispatch(actionCreater.getList())
            dispatch( actionCreater.focusedSearch())
        },
        handleInputBlur(){
            dispatch(actionCreater.blurSearch())
        },
        handleMouseEnter(){
            dispatch(actionCreater.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreater.mouseLeave())
        },
        handleChangePage(totalPage,page,spin){
            //spin.style.transform= rotate(360deg)
            //[^0-9]/ig不是數值的值
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,0);
            }else{
                originAngle=0;
            }
            spin.style.transform =`rotate(${originAngle+360}deg)`;
            if(page<totalPage){
                page++;
            }else{
                page=1;
            }
            dispatch(actionCreater.changePage(page))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( Header)