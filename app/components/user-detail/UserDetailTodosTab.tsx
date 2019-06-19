import * as React from 'react';
import {PureComponent} from "react";
import withTodosData from "../../hoc/withTodosData";
import {TitleSubtitleListCell} from "../common/list/index";
import {Animated} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles, {inherited} from "./styles";
import {Loader} from "../common/loader/index";
import {Color} from "../../styles/global";

export class UserDetailTodosTab extends PureComponent<IUserDetailTodosTab & IWithTodosDataProps & IWithTodosDataOptionalProps,
    IUserDetailTodosTabState> {
    constructor(props: IUserDetailTodosTab & IWithTodosDataProps & IWithTodosDataOptionalProps) {
        super(props);
        this.state = {opacity: new Animated.Value(0)}
    }

    componentDidUpdate(prevProps: Readonly<IUserDetailTodosTab & IWithTodosDataProps & IWithTodosDataOptionalProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.loading && !this.props.loading) {
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 400
            }).start();
        }
    }

    render() {
        return this.props.loading
            ? <Loader loading={true} color={Color.White} style={{justifyContent: 'flex-start'}} />
            : (
                <Animated.View style={[styles.postTabContainer, {opacity: this.state.opacity}]}>
                    {this.props.todos.map(v => (
                        <TitleSubtitleListCell
                            key={v.id}
                            title={v.title}
                            leftAccessory={() => (
                                <Icon
                                    name={v.completed ? "ios-checkmark-circle-outline" : "ios-radio-button-off"}
                                    size={30} />
                            )}
                            cellStyle={[inherited.cell, styles.todoCell]}
                            titleStyle={[inherited.title]}
                            subtitleStyle={inherited.subtitle} />
                    ))}
                </Animated.View>
            );
    }
}

export default withTodosData(UserDetailTodosTab);
