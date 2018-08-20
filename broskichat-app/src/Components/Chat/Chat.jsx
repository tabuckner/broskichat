import React, { Component } from 'react';
import io from 'socket.io-client';
import { MESSAGE_SENT, MESSAGE_RECEIVED } from '../../shared/Global/sockets/events';
import Form from './Form/Form';

class Chat extends Component {
  constructor() {
    super();
    this.state = { // Why is this in the constructor?
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
      message: this.state.message
    }
    this.addMessage(newMessage);
    this.socket.emit(MESSAGE_SENT, newMessage);
    this.setState({ message: '' });
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
            { // Abstract into a Message SFC using UUID for IDs
              this.state.messages.map(message => {
                const classes = message.userId === this.state.userId ? 'message is-info' : 'message is-success';
                const styles = message.userId === this.state.userId ? {} : { borderWidth: '0 4px 0 0', textAlign: 'right' };
                return (
                  <div className={classes} key={`${message.userId}-${message.message.replace(/\s/g, '')}`}>
                    <div className="message-body" style={styles}>{message.message}</div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <Form 
          value={this.state.message}
          onChange={this.setMessage}
          onClick={this.sendMessage}
        />
      </div>
    );
  }
}

export default Chat;
