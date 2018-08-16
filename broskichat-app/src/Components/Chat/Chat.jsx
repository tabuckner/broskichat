import React, { Component } from 'react';
import io from 'socket.io-client';


class Chat extends Component {
  constructor() {
    super();
    this.socket = io('localhost:3000');
  }

  state = {}
  render() {
    return (
      <div className="chat container">
        <div className="message" style={{ minHeight: '100vh' }}>
          <div className="message-header">
            <p>Chat Test</p>
          </div>
          <div className="message-body">
            <div className="message is-info">
              <div className="message-body">test</div>
            </div>
            <div className="message is-dark">
              <div className="message-body">test response</div>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <p className="control">
            <input className="input" type="text" name="mesasge" placeholder="Enter Message"/>
          </p>
        </div>
      </div>
    );
  }
}

export default Chat;