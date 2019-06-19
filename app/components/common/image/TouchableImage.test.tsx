import * as React from 'react';
import {shallow} from "enzyme";
import TouchableImage from "./TouchableImage";

describe('TouchableImage', () => {
    it('renders correctly', () => {
        expect(shallow(<TouchableImage source={{uri: 'uri'}}/>)).toMatchSnapshot();
    });
});