import * as React from 'react';
import {shallow} from 'enzyme';
import ListCell from './ListCell';
import {Text} from "react-native";

describe('ListCell', () => {
    it('renders correctly', () => {
        expect(shallow(<ListCell><Text>Foo</Text></ListCell>)).toMatchSnapshot();
    });
});
