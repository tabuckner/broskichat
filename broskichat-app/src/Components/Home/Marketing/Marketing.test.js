import React from 'react';
import Marketing from './Marketing';
import Point from './Point/Point';
import { mount } from 'enzyme';


describe('<Marketing />', () => {
  
  it('Should create a number of points', () => {
    const mockProps = [
      { img: null, title: 'Come Join', text: 'Join our community and start chatting today.' },
      { img: null, title: 'Realtime', text: 'Chat with others in real time about whatever you\'d like.' }
    ];
    const marketing = mount(<Marketing content={mockProps} />);
    expect(marketing.find(Point)).toHaveLength(2);


  });

});
