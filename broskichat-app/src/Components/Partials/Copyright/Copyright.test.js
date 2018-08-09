import React from 'react';
import { shallow } from 'enzyme';
import Copyright from './Copyright';


describe('<Copyright />', () => {
  
  const copyright = shallow(<Copyright />);

  it('should have black background color', () => {
    expect(copyright.find('.copyright').hasClass('has-background-black')).toBe(true);
  });

  it('should have centered text', () => {
    expect(copyright.find('.copyright_text').hasClass('has-text-centered')).toBe(true);
  });

  it('should have light text', () => {
    expect(copyright.find('.copyright_text').hasClass('has-text-light')).toBe(true);
  });
});
