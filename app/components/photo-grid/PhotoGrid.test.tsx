import * as React from 'react';
import {shallow} from "enzyme";
import {PhotoGrid} from "./PhotoGrid";

describe('PhotoGrid', () => {
    it('renders correctly', () => {
        expect(shallow(<PhotoGrid/>)).toMatchSnapshot();
    });
});