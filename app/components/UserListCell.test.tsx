import * as React from 'react';
import jest from 'jest';
import UserList from './UserList';

import {shallow} from "enzyme";

describe('UserList', () => {
    it('renders correctly', () => {
        expect(shallow(<UserList api={jest.mock('../classes/Api')} />)).toMatchSnapshot();
    });
});
