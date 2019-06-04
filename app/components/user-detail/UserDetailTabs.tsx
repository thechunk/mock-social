import * as React from 'react';
import {PureComponent} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {SegmentedControl, TabBar, Tab, Content} from '../segmented-control';
import styles from './styles';
import g from '../../styles/global';
import UserDetailPostsTab from "./UserDetailPostsTab";

export default class UserDetailTabs extends PureComponent<IUserTabs> {
    render() {
        const {suite, street, city, zipcode} = this.props.user.address;
        return (
            <SegmentedControl>
                <TabBar style={styles.tabBar}>
                    <Tab
                        inactiveStyle={styles.tab}
                        activeStyle={styles.tabActive}
                        activeTextStyle={styles.tabTextActive}
                        id={0}
                        title='Address' />
                    <Tab
                        inactiveStyle={[styles.tab, styles.tabLeftBorder]}
                        activeStyle={styles.tabActive}
                        activeTextStyle={styles.tabTextActive}
                        id={1}
                        title='Posts' />
                </TabBar>
                <Content id={0}>
                    <TouchableWithoutFeedback>
                        <View style={g.generalPadding}>
                            <Text>{`${suite} ${street}`}</Text>
                            <Text>{city}</Text>
                            <Text>{zipcode}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Content>
                <Content id={1}>
                    <UserDetailPostsTab id={this.props.user.id} />
                </Content>
            </SegmentedControl>
        );
    }
}