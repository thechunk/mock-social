import * as React from 'react';
import {PureComponent} from 'react';
import {SegmentedControl, TabBar, Tab, Content} from '../segmented-control';
import styles from './styles';
import g, {Color} from '../../styles/global';
import UserDetailPostsTab from "./UserDetailPostsTab";
import UserDetailTodosTab from "./UserDetailTodosTab";

export default class UserDetailTabs extends PureComponent<IUserTabs> {
    render() {
        return (
            <>
                <SegmentedControl>
                    <TabBar style={styles.tabBar}>
                        <Tab
                            inactiveStyle={[styles.tab, {backgroundColor: Color.SecondaryAccent}]}
                            activeStyle={styles.tabActive}
                            inactiveTextStyle={styles.tabTextInactive}
                            activeTextStyle={styles.tabTextActive}
                            id={0}
                            title='Posts' />
                        <Tab
                            inactiveStyle={[styles.tab, styles.tabLeftBorder, {backgroundColor: Color.SecondaryAccent}]}
                            activeStyle={styles.tabActive}
                            inactiveTextStyle={styles.tabTextInactive}
                            activeTextStyle={styles.tabTextActive}
                            id={1}
                            title='To-Dos' />
                    </TabBar>
                    <Content id={0}>
                        <UserDetailPostsTab id={this.props.user.id} />
                    </Content>
                    <Content id={1}>
                        <UserDetailTodosTab id={this.props.user.id} />
                    </Content>
                </SegmentedControl>
            </>
        );
    }
}