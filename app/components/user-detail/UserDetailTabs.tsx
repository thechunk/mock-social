import * as React from 'react';
import {PureComponent} from 'react';
import {Text} from 'react-native';
import {SegmentedControl, TabBar, Tab, Content} from '../segmented-control';

export default class UserDetailTabs extends PureComponent<IUserTabs> {
    render() {
        return (
            <SegmentedControl>
                <TabBar>
                    <Tab id={0} title='Hello' />
                    <Tab id={1} title='Hello2' />
                </TabBar>
                <Content id={0}>
                    <Text>HelloContent</Text>
                </Content>
                <Content id={1}>
                    <Text>Hello2Content</Text>
                </Content>
            </SegmentedControl>
        );
    }
}