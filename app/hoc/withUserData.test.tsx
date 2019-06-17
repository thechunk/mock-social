/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {mount, shallow} from 'enzyme';
import {View} from "react-native";
import withUserData from "./withUserData";
import {UsersApi} from '../classes/Api';
require('setimmediate');

describe('withUserData', () => {
    it('wrapper renders correctly', () => {
        const Component = () => (<View/>);
        const Wrapped: any = withUserData(Component);
        expect(shallow(<Wrapped id={1} />)).toMatchSnapshot();
    });

    it('hydrates with initial data', () => {
        const Component = () => (<div />);
        const Wrapped: any = withUserData(Component);
        const wrappedComponent = mount(<Wrapped hydrate={{foo: 'bar'}} />).childAt(0);
        expect(wrappedComponent.props().user).toEqual({foo: 'bar'});
    });

    it('calls api', (done) => {
        UsersApi.getById = jest.fn().mockReturnValue(Promise.resolve());
        const Component = () => (<div />);
        const Wrapped: any = withUserData(Component);
        mount(<Wrapped id={1} />);
        done();
        expect(UsersApi.getById).toBeCalledTimes(1);
    });

    it('calls api, sets data and loader status on success', (done) => {
        UsersApi.getById = jest.fn().mockReturnValue(Promise.resolve({bar: 'foo'}));
        const Component = () => (<div />);
        const Wrapped: any = withUserData(Component);
        let wrappedComponent = mount(<Wrapped id={1} />).childAt(0);
        expect(wrappedComponent.props().loading).toEqual(true);

        flushAwaitable(done).then(() => {
            expect(wrappedComponent.props().loading).toEqual(false);
            expect(wrappedComponent.props().user).toEqual({bar: 'foo'});
        });
    });
});
