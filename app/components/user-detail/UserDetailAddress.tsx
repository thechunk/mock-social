import * as React from 'react';
import {PureComponent} from "react";
import {TouchableWithoutFeedback, View, Text} from "react-native";
import styles from "./styles";
import g, {Color} from '../../styles/global';
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import withNavigationParamsAsProps from "../../hoc/withNavigationParamsAsProps";

export class UserDetailAddress extends PureComponent<IUserDetailAddress & NavigationInjectedProps &
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
                    <View style={styles.callOutAddress}>
                        <View style={g.flex1}>
                            <Text>
                                {`${this.props.user.address.suite} ${this.props.user.address.street}`}
                            </Text>
                            <Text>{this.props.user.address.city}</Text>
                            <Text>{this.props.user.address.zipcode}</Text>
                        </View>
                        <Icon
                            style={styles.callOutAccessory}
                            name="ios-arrow-dropright"
                            size={30}
                            color={Color.SecondaryAccent} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default withNavigation(withNavigationParamsAsProps(UserDetailAddress));