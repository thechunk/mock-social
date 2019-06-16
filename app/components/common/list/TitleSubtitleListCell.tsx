import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import ListCell from './ListCell';
import {default as inherited} from "./styles";
import g from '../../../styles/global';

class TitleSubtitleListCell extends PureComponent<ITitleSubtitleListCell> {
    render() {
        return (
            <ListCell
                onPress={this.props.onPress}
                containerStyle={inherited.cellOuter}
                cellStyle={this.props.cellStyle}>
                {this.props.leftAccessory
                    ? <View style={inherited.leftAccessory}>{this.props.leftAccessory()}</View>
                    : null}
                <View style={[g.flexColumn, {justifyContent: 'center'}]}>
                    <Text style={this.props.titleStyle}>{this.props.title}</Text>
                    {this.props.subtitle && this.props.subtitle.length > 0
                        ? <Text style={this.props.subtitleStyle}>{this.props.subtitle}</Text>
                        : null
                    }
                </View>
                {this.props.rightAccessory
                    ? <View style={inherited.rightAccessory}>{this.props.rightAccessory()}</View>
                    : null}
            </ListCell>
        );
    }
}

export default TitleSubtitleListCell;
