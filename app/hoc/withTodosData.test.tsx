/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {mount, shallow} from 'enzyme';
import {View} from "react-native";
import withTodosData from "./withTodosData";
import {TodosApi} from '../classes/Api';
require('setimmediate');

describe('withTodosData', () => {
    it('wrapper renders correctly', () => {
        const Component = () => (<View/>);
        const Wrapped: any = withTodosData(Component);
        expect(shallow(<Wrapped id={1} />)).toMatchSnapshot();
    });

    it('calls api', (done) => {
        TodosApi.getAllByUserId = jest.fn().mockReturnValue(Promise.resolve());
        const Component = () => (<div />);
        const Wrapped: any = withTodosData(Component);
        mount(<Wrapped id={1} />);
        done();
        expect(TodosApi.getAllByUserId).toBeCalledTimes(1);
    });

    it('calls api, sets data and loader status on success', (done) => {
        TodosApi.getAllByUserId = jest.fn().mockReturnValue(Promise.resolve(['foo']));
        const Component = () => (<div />);
        const Wrapped: any = withTodosData(Component);
        let wrappedComponent = mount(<Wrapped id={1} />).childAt(0);
        expect(wrappedComponent.props().loading).toEqual(true);

        flushAwaitable(done).then(() => {
            expect(wrappedComponent.props().loading).toEqual(false);
            expect(wrappedComponent.props().todos).toEqual(['foo']);
        });
    });
});
