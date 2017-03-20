import React, { Component,PropTypes } from 'react';
import MessageModel from './MessageModel';
import { Panel, ButtonToolbar, Button, InputGroup, Collapse, FormControl } from 'react-bootstrap';
import { browserHistory} from 'react-router';

export default class Message extends Component{
    constructor(props){
        super(props);
        
    }   
    
    static PropTypes = {
        data: PropTypes.object.isRequired
    }

    render(){
        const detailURL = ``; //url of detailed order info
        return <Panel className="itxia-recentMessage" header={this.props.data.orderName}>
            <p><strong>用户名: </strong>{this.props.data.userName}</p>
            <p><strong>最后回复时间： </strong>{this.props.data.replyTime}</p>
            <p><strong>消息： </strong>{this.props.data.content}</p>
            <span><Button onClick={browserHistory.push(detailURL)}>进入订单详情</Button></span>
            </Panel>;
    }
}