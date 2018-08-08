import React from 'react';
import Point from './Point';
import { shallow } from 'enzyme';


describe('<Point />', () => {

  describe('Should render with...', () => {

    const mockProps = {
      img: 'https://bulma.io/images/placeholders/1280x960.png',
      title: 'Come Join',
      text: 'Join our community and start chatting today.'
    };
    const point = shallow( <Point point={mockProps} /> );
    expect(point).toBeDefined();

    it('a card', () => {
      expect(point.find('.card')).toBeDefined();
    });

    it('an image', () => {
      expect(point.find('img')).toBeDefined();
    });

    it('a title', () => {
      expect(point.find('p.title')).toBeDefined();
    });

    it('some text', () => {
      expect(point.find('.content')).toBeDefined();
    });
  });
});