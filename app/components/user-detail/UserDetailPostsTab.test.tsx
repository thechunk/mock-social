import * as React from 'react';
import {UserDetailPostsTab} from './UserDetailPostsTab';

import {shallow} from 'enzyme';
import {Loader} from "../common/loader/index";
import {Animated} from "react-native";

describe('UserDetailPostsTab', () => {
    const posts = [{id: 1, title: 'title', body: 'body'}];

    it('renders correctly', () => {
        expect(shallow(<UserDetailPostsTab id={1} posts={posts} />)).toMatchSnapshot();
    });

    it('shows loader', () => {
        const wrapper = shallow(<UserDetailPostsTab id={1} loading={true} />);
        expect(wrapper.find(Loader)).toHaveLength(1);
        expect(wrapper.find(Animated.View)).toHaveLength(0);
    });

    it('shows content', () => {
        const wrapper = shallow(<UserDetailPostsTab id={1} loading={false} posts={posts} />);
        expect(wrapper.find(Loader)).toHaveLength(0);
        expect(wrapper.find(Animated.View)).toHaveLength(1);
    })
});
