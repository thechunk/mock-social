import * as React from 'react';
import {shallow} from "enzyme";
import SegmentedControl from "./SegmentedControl";

describe('SegmentedControl', () => {
    it('renders correctly', () => {
        expect(shallow(<SegmentedControl />)).toMatchSnapshot();
    });
});