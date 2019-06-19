import * as React from 'react';
import {shallow} from "enzyme";
import PhotoGridCell from "./PhotoGridCell";

describe('PhotoGridCell', () => {
    it('renders correctly', () => {
        expect(shallow(<PhotoGridCell style={{}} url="https://url"/>)).toMatchSnapshot();
    });
});