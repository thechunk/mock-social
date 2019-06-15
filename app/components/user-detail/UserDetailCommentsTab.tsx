import * as React from 'react';
import {PureComponent} from "react";
import withCommentsData from "../../hoc/withCommentsData";
import {TitleSubtitleListCell} from "../common/list/index";
import {View} from "react-native";
import styles, {inherited} from "./styles";

class UserDetailCommentsTab extends PureComponent<IUserDetailCommentsTab & IWithCommentsDataProps & IWithCommentsDataOptionalProps> {
    render() {
        return (
            <View style={styles.postTabContainer}>
                {this.props.comments.map(v => (
                    <TitleSubtitleListCell
                        key={v.id}
                        title={v.title}
                        subtitle={v.body}
                        cellStyle={[inherited.cell, styles.postCell]}
                        titleStyle={inherited.title}
                        subtitleStyle={inherited.subtitle} />
                ))}
            </View>
        )
    }
}

export default withCommentsData(UserDetailCommentsTab);
