import * as React from 'react';
import {shallow} from 'enzyme';
import UserDetailTabs from './UserDetailTabs';

describe('UserDetailTabs', () => {
    it('renders correctly', () => {
        expect(shallow(<UserDetailTabs/>)).toMatchSnapshot();
    });
});