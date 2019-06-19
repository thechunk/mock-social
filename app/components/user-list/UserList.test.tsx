import * as React from 'react';
import {UserList} from './UserList';

import {shallow} from 'enzyme';
import {Loader} from "../common/loader/index";
import {FlatList} from "react-native";

describe('UserList', () => {
    it('renders correctly', () => {
        expect(shallow(<UserList users={[]} />)).toMatchSnapshot();
    });

    it('navigateToDetail navigates away with data', () => {
        const navigate = jest.fn();
        const wrapper = shallow(<UserList users={[]} navigation={{navigate}} loading={true} />);
        const user = {id: 1};
        wrapper.instance().navigateToDetail(user)();
        expect(navigate).toBeCalledWith('UserDetail', {hydrate: user, id: user.id})
    });

    it('shows loader', () => {
        const wrapper = shallow(<UserList users={[]} navigation={{}} loading={true} />);
        expect(wrapper.find(Loader)).toHaveLength(1);
        expect(wrapper.find(FlatList)).toHaveLength(0);
    });

    it('shows content', () => {
        const wrapper = shallow(<UserList users={[]} navigation={{}} loading={false} />);
        expect(wrapper.find(Loader)).toHaveLength(0);
        expect(wrapper.find(FlatList)).toHaveLength(1);
    })
});
