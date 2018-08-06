import React from 'react';
import TestRenderer from 'react-test-renderer';
import Marketing from './Marketing';
import Point from './Point/Point';


describe('<Marketing />', () => {
  
  describe('Should create a number of points', () => {
    const mockProps = [
      { img: null, title: 'Come Join', text: 'Join our community and start chatting today.' },
      { img: null, title: 'Realtime', text: 'Chat with others in real time about whatever you\'d like.' }
    ];
    const marketing = TestRenderer.create(<Marketing content={mockProps} />);
    const testInstance = marketing.root;
    const points = testInstance.findByType(Point);
    console.log(marketing.toJSON());

    expect(point).toBe(2);
  });

});
