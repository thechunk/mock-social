import * as React from 'react';
import {PureComponent} from "react";
import withPostsData from "../../hoc/withPostsData";
import {TitleSubtitleListCell} from "../common/list/index";
import {View} from "react-native";
import styles, {inherited} from "./styles";

class UserDetailPostsTab extends PureComponent<IUserDetailPostsTab & IWithPostsDataProps & IWithPostsDataOptionalProps> {
    render() {
        return (
            <View>
                {this.props.posts.map(v => (
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

export default withPostsData(UserDetailPostsTab);
