import * as React from 'react';
import {shallow} from "enzyme";
import ListCell from "./ListCell";

describe('ListCell', () => {
    it('renders correctly', () => {
        expect(shallow(<ListCell />)).toMatchSnapshot();
    });
});
