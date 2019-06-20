import * as React from 'react';
import {shallow} from 'enzyme';
import {UserDetail} from './UserDetail';

describe('UserDetail', () => {
    it('renders correctly', () => {
        expect(shallow(<UserDetail loading={false} user={{id: 1, name: "Name", company: {name: "Company", catchPhrase: "catchPhrase"}}} />)).toMatchSnapshot();
    });
});
