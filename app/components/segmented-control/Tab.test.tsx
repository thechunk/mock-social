import * as React from 'react';
import {shallow} from "enzyme";
import Tab from "./Tab";

describe('Tab', () => {
    it('renders correctly', () => {
        expect(shallow(<Tab id={0} title="Title" />)).toMatchSnapshot();
    });
});