import * as React from 'react';
import {shallow} from "enzyme";
import LoadedImage from "./LoadedImage";

describe('LoadedImage', () => {
    it('renders correctly', () => {
        expect(shallow(<LoadedImage source={{uri: 'uri'}}/>)).toMatchSnapshot();
    });
});