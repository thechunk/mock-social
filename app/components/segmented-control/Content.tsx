import * as React from 'react';
import {PureComponent} from 'react';
import SegmentedControlContext from './SegmentedControlContext';
import {Animated, Dimensions} from "react-native";

export default class Content extends PureComponent<IContent, IContentState> {
    private height: number = 0;

    constructor(props: IContent) {
        super(props);
        this.state = {tabStates: {}}
    }

    componentDidMount(): void {
        this.height = Dimensions.get('window').height;
    }

    render() {
        return (
            <SegmentedControlContext.Consumer>
                {({selectedTab}) => {
                    if (!this.state.tabStates.hasOwnProperty(selectedTab)) {
                        this.state.tabStates[selectedTab] = new Animated.Value(0);
                    }
                    Animated.timing(this.state.tabStates[selectedTab], {
                        toValue: 1,
                        duration: 200
                    }).start();
                    for (const key in this.state.tabStates) {
                        if (parseInt(key) !== selectedTab) {
                            Animated.timing(this.state.tabStates[key], {
                                toValue: 0,
                                duration: 200
                            }).start();
                        }
                    };
                    return (
                        <Animated.View style={selectedTab === this.props.id
                            ? {minHeight: this.height, opacity: this.state.tabStates[selectedTab]}
                            : {minHeight: 0, height: 0, opacity: this.state.tabStates[selectedTab]}}>
                            {this.props.children}
                        </Animated.View>
                    )
                }}
            </SegmentedControlContext.Consumer>
        );
    }
}
