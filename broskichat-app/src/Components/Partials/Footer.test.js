import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import PreFooter from './PreFooter/PreFooter';
import Copyright from './Copyright/Copyright';


describe('<Footer />', () => {
  
  const footer = shallow(<Footer />);
  it('should have footer tag with class `footer`', () => {
    const footerTag = footer.find('footer');
    expect(footerTag).toBeDefined();
    expect(footerTag.hasClass('footer')).toBe(true);
  });
  
  it('should have a `PreFooter` child', () => {
    expect(footer.find(PreFooter)).toBeDefined();
  });
  
  it('should have a `Copyright` child', () => {
    expect(footer.find(Copyright)).toBeDefined();
  });
});
