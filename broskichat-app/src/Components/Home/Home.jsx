import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Marketing from './Marketing/Marketing';
import community from './img/community.png';
import typing from './img/typing.png';
import multiDevice from './img/multi-device.png';

class Home extends Component {
  state = {
    hero: {
      title: 'BroskiChat',
      subtitle: 'A chat app for you. And...',
      tag: 'your bros?'
    },
    marketing: [
      { img: community, title: 'Come Join', text: 'Join our community and start chatting today.' },
      { img: typing, title: 'Realtime', text: 'Chat with others in real time about whatever you\'d like.' },
      { img: multiDevice, title: 'Responsive', text: 'Enjoy our services by using us on all of your devices.' },
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Hero content={this.state.hero} />
        <Marketing content={this.state.marketing} />
      </React.Fragment>
    );
  }
}

export default Home;