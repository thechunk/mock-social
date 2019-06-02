import * as React from 'react';
import {shallow} from 'enzyme';
import CopyToChildren from './CopyToChildren';

describe('CopyToChildren', () => {
    it('renders correctly', () => {
        expect(shallow(<CopyToChildren object={{}} />)).toMatchSnapshot();
    });
});