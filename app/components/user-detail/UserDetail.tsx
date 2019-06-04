import * as React from 'react';
import {PureComponent} from 'react';
import {ScrollView, Text, View} from 'react-native';
import withUserData from '../../hoc/withUserData';
import withNavigationParamsAsProps from '../../hoc/withNavigationParamsAsProps';
import UserDetailTabs from './UserDetailTabs';
import {NavigationInjectedProps} from 'react-navigation';
import PhotoHero from './PhotoHero';
import styles from './styles';
import UserDetailAlbums from "./UserDetailAlbums";
import {Loader} from "../common/loader/index";
import {inherited} from "../user-list/styles";

export class UserDetail extends PureComponent<IWithUserDataProps & IWithUserDataOptionalProps &
    IWithNavigationParamsAsProps & NavigationInjectedProps> {
    render() {
        return this.props.loading ? <Loader loading={this.props.loading} style={inherited.loader} /> : (
            <ScrollView contentContainerStyle={styles.container}>
                {this.props.user
                    ? (
                        <>
                            <PhotoHero userId={this.props.user.id} />
                            <View style={styles.nameOverlay}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{this.props.user.name}</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.subtitle}>at {this.props.user.company.name}</Text>
                                </View>
                            </View>
                            <View style={styles.callOutSection}>
                                <Text style={styles.callOutSectionText}>{this.props.user.company.catchPhrase}</Text>
                            </View>
                            <UserDetailAlbums userId={this.props.user.id} />
                            <UserDetailTabs user={this.props.user} />
                        </>
                    )
                    : null
                }
            </ScrollView>
        )
    }
}

export default withNavigationParamsAsProps(withUserData(UserDetail));