import * as React from 'react';
import {PureComponent} from "react";
import withTodosData from "../../hoc/withTodosData";
import {TitleSubtitleListCell} from "../common/list/index";
import {View} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import styles, {inherited} from "./styles";

class UserDetailTodosTab extends PureComponent<IUserDetailTodosTab & IWithTodosDataProps & IWithTodosDataOptionalProps> {
    render() {
        return (
            <View style={styles.postTabContainer}>
                {this.props.todos.map(v => (
                    <TitleSubtitleListCell
                        key={v.id}
                        title={v.title}
                        accessory={() => (
                            <Icon
                                name={v.completed ? "ios-checkmark-circle-outline" : "ios-radio-button-off"}
                                size={30} />
                        )}
                        cellStyle={[inherited.cell, styles.todoCell]}
                        titleStyle={[inherited.title, styles.todoTitle]}
                        subtitleStyle={inherited.subtitle} />
                ))}
            </View>
        )
    }
}

export default withTodosData(UserDetailTodosTab);
