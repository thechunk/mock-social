import * as React from 'react';
import {shallow} from "enzyme";
import ImageListCell from "./ImageListCell";

describe('ImageListCell', () => {
    it('renders correctly', () => {
        expect(shallow(<ImageListCell id={1} key={1} title="title"/>)).toMatchSnapshot();
    });
});