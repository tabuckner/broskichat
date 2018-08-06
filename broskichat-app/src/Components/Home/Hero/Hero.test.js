import React from 'react';
import TestRenderer from 'react-test-renderer';
import Hero from './Hero';


describe('<Hero />', () => {
  
  describe('Should have defined values', () => {
    const mockProps = { title: 'A Title', subtitle: 'A Subtitle', tag: '..a tag.' };
    const hero = TestRenderer.create(<Hero content={mockProps} />);
    const testInstance = hero.root;

    it('should have a title', () => {
      const title = testInstance.props.content.title;
      expect(title).toBeDefined();
    }) ;
    
    it('should have a subtitle', () => {
      const subtitle = testInstance.props.content.subtitle;
      expect(subtitle).toBeDefined();
    });
    
    it('should have a tag', () => {
      const tag = testInstance.props.content.tag;
      expect(tag).toBeDefined();
    });
  });

});
