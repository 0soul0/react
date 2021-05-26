import { Fragment} from 'react';
import { Input,Button ,List} from 'antd';

// 無狀態組件 當組件只有render時 可以縮寫 且性能較高
const TodoListUI=(props)=>{
    return(
        <Fragment>
            <div style={{marginTop: '10px',marginLeft: '10px'}}>
                <Input 
                    placeholder="todo info" 
                    value={props.inputValue} 
                    onChange={props.handleInputChange} 
                    style={{width: '300px',marginRight: '10px'}}/>
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                <List
                    style={{marginTop: '10px',width: '300px'}}
                    size="small"
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => <List.Item onClick={()=>{props.handleRemoveItem(index)}}>{index}-{item}</List.Item>}
                />
            </div>
        </Fragment>
        
    );
}

// class TodoListUI extends Component{

//     render(){
//         return(
//             <Fragment>
//                 <div style={{marginTop: '10px',marginLeft: '10px'}}>
//                     <Input 
//                         placeholder="todo info" 
//                         value={this.props.inputValue} 
//                         onChange={this.props.handleInputChange} 
//                         style={{width: '300px',marginRight: '10px'}}/>
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                     <List
//                         style={{marginTop: '10px',width: '300px'}}
//                         size="small"
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => <List.Item onClick={(index)=>{this.props.handleRemoveItem(index)}}>{index}-{item}</List.Item>}
//                     />
//                 </div>
//             </Fragment>
            
//         );
//     }

// }

export default TodoListUI