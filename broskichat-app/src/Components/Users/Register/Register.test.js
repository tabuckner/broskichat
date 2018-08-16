import React from 'react';
import Register from './Register';
import { shallow } from 'enzyme';


describe('<Register />', () => {
  const register = shallow(<Register />);
  
  it('Should have only 1 `h1` element', () => {
    expect(register.find('h1')).toHaveLength(1);
  });

  it('Should expect preventDefault to be called', () => {
    const preventDefault = jest.fn();
    const form = register.find('form').first();
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();
  });

});
