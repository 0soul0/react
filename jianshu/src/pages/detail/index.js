import {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import {withRouter} from 'react-router-dom';
import {
    DetailWrapper,
    Header,
    Content
} from './style'

class Detail extends Component{

    render(){
        const {title,content} = this.props;
        return (
            <div>
                <DetailWrapper>
                    <Header>{title}</Header>
                    {/* dangerouslySetInnerHTML轉義成html */}
                    <Content dangerouslySetInnerHTML={{__html: content}}>
                    </Content>
                </DetailWrapper>
            </div>
        )
    }

    componentDidMount(){
        // console.log(this.props.match.params.id)
       this.props.getDetailData(this.props.match.params.id)
    }
}

const mapState=(state)=>({
      title:state.getIn(['detail','title']),
      content:state.getIn(['detail','content'])
})

const mapDispatch=(dispatch)=>({

    getDetailData(id){
        dispatch(actionCreator.getDetail(id))
    }
})
//withRouter 讓此組件獲取所有參數不然會取得不到this.props.match.params.id
//因為利用loadoable加載
export default connect(mapState,mapDispatch)(withRouter(Detail));