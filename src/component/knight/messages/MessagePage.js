import React from 'react';
import Message from './Message';
import MessageModel from './MessageModel';

export default class MessagePage extends React.Component {
    render() {
        const $messages = MessageModel.testData(10).map(item=><Message key={Math.random()} data={item}/>);
        return (
            <div>
                <h1>最近十个有新回复的请求</h1>
                <hr className="colorgraph" />
                {$messages}
            </div>
        )
    }
}