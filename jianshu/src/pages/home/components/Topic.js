import {PureComponent} from 'react';
import {connect} from 'react-redux'
import {
    TopicWrapper,
    TopicItem
} from '../style'

class Topic extends PureComponent{

    render(){
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return (
                            <TopicItem key={item.get('id')}> 
                            <img alt='error' className='topic-pic' src={item.get('imgUrl')}/>
                            {item.get('title')}
                            </TopicItem>
                        );
               
                })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        list: state.getIn(['home','topicList'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
     
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);