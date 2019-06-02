import React, {ComponentType, FunctionComponent} from 'react';
import {NavigationScreenProps, withNavigation} from "react-navigation";

/**
 * Applies navigation params from React Native Navigation to the wrapped component
 * @param Component - The component to wrap
 * @returns Wrapped component with props from navigation params
 */
type WrappedComponentProps = IWithNavigationParamsAsProps & NavigationScreenProps;
const withNavigationParamsAsProps = <P extends WrappedComponentProps>(Component: ComponentType<P>):
    FunctionComponent<WrappedComponentProps> =>
    (props: WrappedComponentProps) => {
        const Wrapped = withNavigation(Component);
        return <Wrapped {...props as P} {...props.navigation.state.params as P} />;
    };

export default withNavigationParamsAsProps;
