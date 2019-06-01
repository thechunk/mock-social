import React, {ComponentType, FunctionComponent} from 'react';
import {NavigationScreenProps, withNavigation} from "react-navigation";

export interface IWithNavigationParamsAsProps extends NavigationScreenProps {
}

/**
 * Applies navigation params from React Native Navigation to the wrapped component
 * @param Component - The component to wrap
 * @returns Wrapped component with props from navigation params
 */
const withNavigationParamsAsProps =
    <P extends IWithNavigationParamsAsProps>(Component: ComponentType<P>):
        FunctionComponent<IWithNavigationParamsAsProps> =>
        (props: IWithNavigationParamsAsProps) => {
            const Wrapped = withNavigation(Component);
            return <Wrapped {...props as P} {...props.navigation.state.params as P} />;
        };

export default withNavigationParamsAsProps;
