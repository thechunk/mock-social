import * as React from 'react';
import {PureComponent} from "react";
import withPostsData from "../../hoc/withPostsData";
import {TitleSubtitleListCell} from "../common/list/index";
import {Animated} from "react-native";
import styles, {inherited} from "./styles";
import {Loader} from "../common/loader/index";
import {Color} from "../../styles/global";

export class UserDetailPostsTab extends PureComponent<IUserDetailPostsTab & IWithPostsDataProps & IWithPostsDataOptionalProps,
    IUserDetailPostsTabState> {
    constructor(props: IUserDetailPostsTab & IWithPostsDataProps & IWithPostsDataOptionalProps) {
        super(props);
        this.state = {opacity: new Animated.Value(0)}
    }

    componentDidUpdate(prevProps: Readonly<IUserDetailPostsTab & IWithPostsDataProps & IWithPostsDataOptionalProps>, prevState: Readonly<{}>, snapshot?: any): void {
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
                <Animated.View
                    style={[styles.postTabContainer, {opacity: this.state.opacity}]}>
                    {this.props.posts.map(v => (
                        <TitleSubtitleListCell
                            key={v.id}
                            title={v.title}
                            subtitle={v.body}
                            cellStyle={[inherited.cell, styles.postCell]}
                            titleStyle={inherited.title}
                            subtitleStyle={inherited.subtitle}/>
                    ))}
                </Animated.View>
            );
    }
}

export default withPostsData(UserDetailPostsTab);
