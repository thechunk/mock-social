import React, {ComponentType, FC} from 'react';
import {NavigationInjectedProps, withNavigation} from 'react-navigation';

/**
 * Applies navigation params from React Native Navigation to the wrapped component
 * @param Component - The component to wrap
 * @returns Wrapped component with props from navigation params
 */
type WrappedComponentProps = IWithNavigationParamsAsProps & NavigationInjectedProps;
const withNavigationParamsAsProps = <P extends WrappedComponentProps>(Component: ComponentType<P>):
    FC<WrappedComponentProps> =>
    (props: WrappedComponentProps) => {
        const Wrapped = withNavigation(Component);
        return <Wrapped {...props as P} {...props.navigation.state.params as P} />;
    };

export default withNavigationParamsAsProps;
