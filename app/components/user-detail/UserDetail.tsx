import * as React from 'react';
import {PureComponent} from 'react';
import {ScrollView, Text, TouchableWithoutFeedback, View} from 'react-native';
import withUserData from '../../hoc/withUserData';
import withNavigationParamsAsProps from '../../hoc/withNavigationParamsAsProps';
import UserDetailTabs from './UserDetailTabs';
import {NavigationInjectedProps} from 'react-navigation';
import PhotoHero from './PhotoHero';
import styles from './styles';
import UserDetailAlbums from "./UserDetailAlbums";
import {Loader} from "../common/loader/index";
import {inherited} from "../user-list/styles";
import {default as g} from '../../styles/global';

export class UserDetail extends PureComponent<IWithUserDataProps & IWithUserDataOptionalProps &
    IWithNavigationParamsAsProps & NavigationInjectedProps> {
    render() {
        return this.props.loading ? <Loader loading={this.props.loading} style={inherited.loader} /> : (
            <ScrollView contentContainerStyle={styles.container} style={g.viewBackground}>
                {this.props.user
                    ? (
                        <>
                            <View style={styles.photoNameView}>
                                <View style={[g.containerShadow, g.flex1]}>
                                    <View style={[styles.photoHeroContainer, g.roundedBorder]}>
                                        <PhotoHero userId={this.props.user.id} />
                                    </View>
                                </View>
                                <View style={styles.nameOverlay}>
                                    <Text style={styles.title}>{this.props.user.name}</Text>
                                    <Text style={styles.subtitle}>at {this.props.user.company.name}</Text>
                                </View>
                            </View>
                            <View style={[styles.callOutSection, g.roundedBorder]}>
                                <Text style={styles.callOutSectionText}>{this.props.user.company.catchPhrase}</Text>
                            </View>

                            <Text style={styles.sectionHeaderText}>My Address</Text>
                            <View style={[styles.callOutSection, g.roundedBorder]}>
                                <TouchableWithoutFeedback>
                                    <View >
                                        <Text>
                                            {`${this.props.user.address.suite} ${this.props.user.address.street}`}
                                        </Text>
                                        <Text>{this.props.user.address.city}</Text>
                                        <Text>{this.props.user.address.zipcode}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>

                            <Text style={styles.sectionHeaderText}>My Albums</Text>
                            <UserDetailAlbums userId={this.props.user.id} />

                            <Text style={styles.sectionHeaderText}>My Activity</Text>
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