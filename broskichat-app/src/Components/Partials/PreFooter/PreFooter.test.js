import React from 'react';
import { shallow } from 'enzyme';
import PreFooter from './PreFooter';


describe('<PreFooter />', () => {
  
  const preFooter = shallow(<PreFooter />);

  it('should have black-ter background color', () => {
    expect(preFooter.find('.prefooter').hasClass('has-background-black-ter')).toBe(true);
  });

  it('should have centered text', () => {
    expect(preFooter.find('.prefooter').hasClass('has-text-centered')).toBe(true);
  });

  it('should have light text', () => {
    expect(preFooter.find('.prefooter_text').hasClass('has-light-text')).toBe(true);
    expect(preFooter.find('.prefooter').hasClass('has-text-grey-lighter')).toBe(true);
  });
});
