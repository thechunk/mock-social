import * as React from 'react';
import {shallow} from "enzyme";
import Loader from "./Loader";

describe('Loader', () => {
    it('renders correctly', () => {
        expect(shallow(<Loader loading={true}/>)).toMatchSnapshot();
    });

    it('renders null if not loading', () => {
        expect(shallow(<Loader loading={false}/>)).toMatchSnapshot();
    });
});