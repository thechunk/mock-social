import * as React from 'react';
import {shallow} from 'enzyme';
import TabBar from './TabBar';

describe('TabBar', () => {
    it('renders correctly', () => {
        expect(shallow(<TabBar />)).toMatchSnapshot();
    });
});