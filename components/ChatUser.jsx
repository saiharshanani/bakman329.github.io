import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button.jsx'

class ChatUser extends React.Component {
    constructor(props) {
        super(props);

        this.onClickName = this.onClickName.bind(this);
    }

    onClickName() {
        var event = {action : 'Clicked Chat User', // state.action,
                     context : 'From NewsFeed', // state.context,
                     name : this.props.name};
        var added = this.props.chat.addChat(this.props.name);
        return ((added) ? event : null);
    }

    render() {
       return (
          <div id='chat-user'>
             <img id='profile-pic' src={this.props.img} />
             <Button href='javascript:void(0)' onClick={this.onClickName}>{this.props.name}</Button>
          </div>
       )
    }
}

export default ChatUser;