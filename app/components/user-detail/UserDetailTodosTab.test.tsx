import * as React from 'react';
import {UserDetailTodosTab} from './UserDetailTodosTab';

import {shallow} from 'enzyme';
import {Loader} from "../common/loader/index";
import {Animated} from "react-native";

describe('UserDetailTodosTab', () => {
    const todos = [{id: 1, title: 'title', completed: true}];

    it('renders correctly', () => {
        expect(shallow(<UserDetailTodosTab id={1} todos={todos} />)).toMatchSnapshot();
    });

    it('shows loader', () => {
        const wrapper = shallow(<UserDetailTodosTab id={1} loading={true} />);
        expect(wrapper.find(Loader)).toHaveLength(1);
        expect(wrapper.find(Animated.View)).toHaveLength(0);
    });

    it('shows content', () => {
        const wrapper = shallow(<UserDetailTodosTab id={1} loading={false} todos={todos} />);
        expect(wrapper.find(Loader)).toHaveLength(0);
        expect(wrapper.find(Animated.View)).toHaveLength(1);
    })
});
