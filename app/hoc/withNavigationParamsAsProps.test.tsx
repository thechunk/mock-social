import * as React from 'react';
import withNavigationParamsAsProps from "./withNavigationParamsAsProps";
import {View} from "react-native";
import {shallow} from "enzyme";

describe('withNavigationParamsAsProps', () => {
    it('wrapper renders correctly', () => {
        const Component = () => (<View/>);
        const Wrapped: any = withNavigationParamsAsProps(Component);
        expect(shallow(<Wrapped navigation={{state: {params: {foo: 'bar'}}}} />)).toMatchSnapshot();
    });

    it('copies navigation params as props', () => {
        const Component = () => (<View />);
        const Wrapped: any = withNavigationParamsAsProps(Component);
        const wrappedComponent = shallow(<Wrapped navigation={{state: {params: {foo: 'bar'}}}}/>);
        expect(wrappedComponent.props().navigation.state.params.foo).toEqual('bar');
        expect(wrappedComponent.props().foo).toEqual('bar');
    });
});
