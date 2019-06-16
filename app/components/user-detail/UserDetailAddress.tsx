import * as React from 'react';
import {PureComponent} from "react";
import {TouchableWithoutFeedback, View, Text} from "react-native";
import styles from "./styles";
import g from '../../styles/global';
import {NavigationInjectedProps} from "react-navigation";
import withNavigationParamsAsProps from "../../hoc/withNavigationParamsAsProps";

class UserDetailAddress extends PureComponent<IUserDetailAddress & NavigationInjectedProps &
    IWithNavigationParamsAsProps> {
    constructor(props: IUserDetailAddress & NavigationInjectedProps & IWithNavigationParamsAsProps) {
        super(props);
        this.onAddressPress = this.onAddressPress.bind(this);
    }

    onAddressPress() {
        this.props.navigation.navigate('MapView', {hydrate: this.props.user});
    }

    render() {
        return (
            <View style={[styles.callOutSection, g.roundedBorder]}>
                <TouchableWithoutFeedback onPress={this.onAddressPress}>
                    <View>
                        <Text>
                            {`${this.props.user.address.suite} ${this.props.user.address.street}`}
                        </Text>
                        <Text>{this.props.user.address.city}</Text>
                        <Text>{this.props.user.address.zipcode}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default withNavigationParamsAsProps(UserDetailAddress);