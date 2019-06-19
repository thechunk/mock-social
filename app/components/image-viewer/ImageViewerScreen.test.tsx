import * as React from 'react';
import {shallow} from "enzyme";
import {ImageViewerScreen} from "./ImageViewerScreen";

describe('ImageViewerScreen', () => {
    it('renders correctly', () => {
        expect(shallow(<ImageViewerScreen hydrate={{url: 'https://url'}} />)).toMatchSnapshot();
    });
});