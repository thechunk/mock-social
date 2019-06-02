import * as React from 'react';
import {PureComponent, ReactElement} from 'react';

export default class CopyToChildren extends PureComponent<ICopyToChildren> {
    render() {
        return React.Children.map<ReactElement<any, any>, ReactElement>(this.props.children as ReactElement[], v => {
            return React.cloneElement(v, this.props.object)
        });
    }
}

