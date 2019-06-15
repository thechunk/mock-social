import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import ListCell from './ListCell';
import {inherited} from "../../user-list/styles";

class TitleSubtitleListCell extends PureComponent<ITitleSubtitleListCell> {
    render() {
        return (
            <ListCell
                onPress={this.props.onPress}
                containerStyle={inherited.cellOuter}
                cellStyle={this.props.cellStyle}>
                {this.props.accessory ? this.props.accessory() : null}
                <Text style={this.props.titleStyle}>{this.props.title}</Text>
                {this.props.subtitle && this.props.subtitle.length > 0
                    ? <Text style={this.props.subtitleStyle}>{this.props.subtitle}</Text>
                    : null
                }
            </ListCell>
        );
    }
}

export default TitleSubtitleListCell;
