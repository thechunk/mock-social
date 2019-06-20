import * as React from 'react';
import App from './App';

import {shallow} from "enzyme";

describe('App', () => {
    it('renders correctly', () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });
});
