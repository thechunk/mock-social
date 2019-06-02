import * as React from 'react';

import {shallow} from 'enzyme';
import UserListCell from './UserListCell';

describe('UserListCell', () => {
    it('renders correctly', () => {
        expect(shallow(<UserListCell key={1} title='title' />)).toMatchSnapshot();
    });
});
