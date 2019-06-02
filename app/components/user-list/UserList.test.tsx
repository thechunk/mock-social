import * as React from 'react';
import UserList from './UserList';

import {shallow} from 'enzyme';

describe('UserList', () => {
    it('renders correctly', () => {
        expect(shallow(<UserList users={[]} />)).toMatchSnapshot();
    });
});
