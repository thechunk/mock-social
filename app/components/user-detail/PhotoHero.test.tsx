import * as React from 'react';
import {shallow} from 'enzyme';
import PhotoHero from './PhotoHero';

describe('PhotoHero', () => {
    it('renders correctly', () => {
        expect(shallow(<PhotoHero photos={[]} />)).toMatchSnapshot();
    });
});