import * as React from 'react';
import {PureComponent} from "react";
import {Text, View} from "react-native";
import withUserData, {IWithUserDataProps, IWithUserDataOptionalProps} from "../../hoc/withUserData";
import withNavigationParamsAsProps, {IWithNavigationParamsAsProps} from "../../hoc/withNavigationParamsAsProps";
import UserDetailTabs from "./UserDetailTabs";

export class UserDetail extends PureComponent<IWithUserDataProps & IWithUserDataOptionalProps &
    IWithNavigationParamsAsProps> {
    render() {
        return (
            <View>
                <Text>{this.props.user ? this.props.user.name : ''}</Text>
                <UserDetailTabs />
            </View>
        )
    }
}

export default withNavigationParamsAsProps(withUserData(UserDetail));