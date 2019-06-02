import * as React from 'react';
import {shallow} from 'enzyme';
import UserDetail from './UserDetail';
import {withNavigation} from 'react-navigation';

describe('UserDetail', () => {
    it('renders correctly', () => {
        const Wrapped = withNavigation(UserDetail);
        expect(shallow(<Wrapped />)).toMatchSnapshot();
    });
});
