import * as React from 'react';
import {shallow} from 'enzyme';
import TabBar from './TabBar';
import {Text} from "react-native";

describe('TabBar', () => {
    it('renders correctly', () => {
        expect(shallow(<TabBar><Text>Text</Text></TabBar>)).toMatchSnapshot();
    });
});