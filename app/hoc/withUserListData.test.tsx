/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {mount, shallow} from 'enzyme';
import {View} from "react-native";
import withUserListData from "./withUserListData";
import {UsersApi} from '../classes/Api';
require('setimmediate');

describe('withUserListData', () => {
    it('wrapper renders correctly', () => {
        const Component = () => (<View/>);
        const Wrapped: any = withUserListData(Component);
        expect(shallow(<Wrapped id={1} />)).toMatchSnapshot();
    });

    it('calls api', (done) => {
        UsersApi.getAll = jest.fn().mockReturnValue(Promise.resolve());
        const Component = () => (<div />);
        const Wrapped: any = withUserListData(Component);
        mount(<Wrapped id={1} />);
        done();
        expect(UsersApi.getAll).toBeCalledTimes(1);
    });

    it('calls api, sets data and loader status on success', (done) => {
        UsersApi.getAll = jest.fn().mockReturnValue(Promise.resolve(['foo']));
        const Component = () => (<div />);
        const Wrapped: any = withUserListData(Component);
        let wrappedComponent = mount(<Wrapped id={1} />).childAt(0);
        expect(wrappedComponent.props().loading).toEqual(true);

        flushAwaitable(done).then(() => {
            expect(wrappedComponent.props().loading).toEqual(false);
            expect(wrappedComponent.props().users).toEqual(['foo']);
        });
    });
});
