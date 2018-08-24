import React, { Component } from 'react';
import io from 'socket.io-client';
import uuidv4 from 'uuid/v4';
import { MESSAGE_SENT, MESSAGE_RECEIVED } from '../../shared/Global/sockets/events';
import Form from './Form/Form';
import Message from './Message/Message';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      userId: 1,
      message: '',
      messages: []
    };
    this.setupSockets();
  }

  setupSockets() {
    this.socket = io('localhost:3000');
    this.socket.on(MESSAGE_RECEIVED, (data) => {
      this.addMessage(data);
    });
  }

  sendMessage = ev => {
    ev.preventDefault();
    const newMessage = {
      userId: this.state.userId,
      message: this.state.message,
      keyId: uuidv4()
    }
    this.addMessage(newMessage);
    this.socket.emit(MESSAGE_SENT, newMessage);
    this.setState({ message: '', echoId:'' });
  }

  addMessage = data => {
    this.setState({ messages: [...this.state.messages, data] });
  }

  setMessage = ev => {
    this.setState({ message: ev.target.value });
  }

  render() {
    return (
      <div className="chat container is-fluid" style={{ minHeight: '75vh', padding: '2rem' }}>
        <div className="message">
          <div className="message-header">
            <p>Chat Test</p>
          </div>
          <div className="message-body">
            <Message 
              messages={this.state.messages}
              message={this.state.message}
              userId={this.state.userId}
              echoId={this.state.echoId} />
          </div>
        </div>
        <Form 
          value={this.state.message}
          onChange={this.setMessage}
          onClick={this.sendMessage} />
      </div>
    );
  }
}

export default Chat;
