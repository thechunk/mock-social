import * as React from 'react';
import {shallow} from 'enzyme';
import Content from './Content';

describe('Content', () => {
    it('renders correctly', () => {
        expect(shallow(<Content id={0} />)).toMatchSnapshot();
    });
});