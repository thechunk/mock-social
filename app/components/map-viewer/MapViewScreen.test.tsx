import * as React from 'react';
import {shallow} from "enzyme";
import {MapViewScreen} from "./MapViewScreen";

describe('MapViewScreen', () => {
    it('renders correctly', () => {
        expect(shallow(<MapViewScreen hydrate={{address: {geo: {lat: 1.2, lng: 2.3}}}} />)).toMatchSnapshot();
    });
});