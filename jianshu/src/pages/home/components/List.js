import {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux'
import {actionCreator} from '../store'
//Link代替 a標籤 因為react規範是只加載一次html
//但是a標籤會重複加載 效能較低
import {Link} from 'react-router-dom'
import {
    ListInfo,
    ListItem,
    LoadMore
} from '../style'

class List extends PureComponent{

    render(){
        const {getMoreList,list,page} = this.props;
        return (
            <Fragment>
                {
                    list.map((item,index)=>{
                        return (
                        <Link key={item.get('id')} to={'/detail/'+item.get('id')}>  
                        <ListItem key={item.get('id')}>
                            <img className='pic' alt='' src={item.get('imgUrl')}></img>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                        </Link>
                      
                        );
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
            </Fragment>
        )
    }
}

const mapState = (state)=>{
    return {
        list:state.getIn(['home','articleList']),
        page:state.getIn(['home','articlePage'])
    }
}

const mapDispatch = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreator.getMoreList(page+1));
    }
})

export default connect(mapState,mapDispatch)(List);