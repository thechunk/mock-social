import * as React from 'react';
import {PureComponent} from 'react';
import SegmentedControlContext from './SegmentedControlContext';
import {Animated, Dimensions, View} from "react-native";

export default class Content extends PureComponent<IContent, IContentState> {
    private height: number = 0;

    componentDidMount(): void {
        this.height = Dimensions.get('window').height;
    }

    render() {
        return (
            <SegmentedControlContext.Consumer>
                {({selectedTab}) => selectedTab === this.props.id
                    ? (<View style={{minHeight: this.height}}>{this.props.children}</View>) : null}
            </SegmentedControlContext.Consumer>
        );
    }
}
