import * as React from 'react';
import UserList from './UserList';

import {shallow} from 'enzyme';
import {Loader} from "../common/loader/index";

describe('UserList', () => {
    it('renders correctly', () => {
        expect(shallow(<UserList users={[]} />)).toMatchSnapshot();
    });

    it('navigateToDetail navigates away with data', () => {
    });

    it('shows loader', () => {
        const component = shallow(<UserList users={[]} navigation={{}} loading={true} />);
    });

    it('shows content', () => {
        const component = shallow(<UserList users={[]} navigation={{}} loading={false} />);
    })
});
