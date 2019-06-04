import * as React from 'react';
import {PureComponent} from 'react';
import SegmentedControlContext from './SegmentedControlContext';

export default class Content extends PureComponent<IContent> {
    render() {
        return (
            <SegmentedControlContext.Consumer>
                {({selectedTab}) => (
                    selectedTab === this.props.id ? this.props.children : null
                )}
            </SegmentedControlContext.Consumer>
        );
    }
}
