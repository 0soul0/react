import { PureComponent} from 'react';
import { connect } from 'react-redux';
import {actionCreator} from './store';
import {Redirect} from 'react-router-dom';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './styled'
// import {connect} from 'react-redux'
// import {actionCreator} from './store'
// import {
//     DetailWrapper,
//     Header,
//     Content
// } from './style'

class Login extends PureComponent{

    render(){

        const {loginStatus} = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox >
                        <Input placeholder='帳號' ref={(input)=>{this.account=input}}></Input>
                        <Input placeholder='密碼' type='password' ref={(input)=>{this.password=input}}></Input>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登入</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'></Redirect>
        }
        
    }

    // componentDidMount(){
    //     // console.log(this.props.match.params.id)
    //    this.props.getDetailData(this.props.match.params.id)
    // }
}

const mapState=(state)=>({
    loginStatus: state.getIn(['login','login']),
})

const mapDispatch=(dispatch)=>({

    login(account,password){
        // console.log(account.value,password.value)
       dispatch(actionCreator.login(account.value,password.value))
    }
})

export default connect(mapState,mapDispatch)(Login);