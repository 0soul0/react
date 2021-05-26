import {PureComponent} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionCreator} from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
// PureComponent內在會自行形成shouldComponentUpdate實做
// 防止沒有變動的資料再度渲染 性能優於Component
// 搭配immutable使用
class Home extends PureComponent{



    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='error' className='banner-imag' src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回頂部</BackTop>:null}
                
            </HomeWrapper>
        )
    }

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
    }
    UNSAFE_componentWillMount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch=(dispatch)=>({
        changeHomeData(){
            dispatch(actionCreator.getList());
        },
        changeScrollTopShow(){
            // console.log(document.documentElement.scrollTop)
            if (document.documentElement.scrollTop<20){
                dispatch(actionCreator.toggleTopShow(false));
            }else{
                dispatch(actionCreator.toggleTopShow(true));
            }
        }
})

export default connect(mapState,mapDispatch)(Home);