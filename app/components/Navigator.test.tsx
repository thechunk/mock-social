import * as React from 'react';
import Navigator from './Navigator';

import {shallow} from 'enzyme';

describe('Navigator', () => {
    it('renders correctly', () => {
        expect(shallow(<Navigator />)).toMatchSnapshot();
    });
});
