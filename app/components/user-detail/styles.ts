import {StyleSheet} from 'react-native';
import * as g from '../../styles/global';

export {default as inherited} from '../common/list/styles';
export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    photoHero: {
        height: 240
    },
    userAlbumsContainer: {
        flexDirection: 'row'
    },
    userAlbumsMore: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    userAlbumsMoreCount: {
        color: g.Color.White,
        textShadowColor: g.Color.Black,
        textShadowRadius: 1,
        fontSize: g.FontSize.SquareCellCallout,
        fontWeight: 'bold'
    },
    userAlbumsMoreText: {
        color: g.Color.White,
        textShadowColor: g.Color.Black,
        fontSize: g.FontSize.SquareCellSubtitle
    },
    nameOverlay: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        height: 240,
        marginLeft: g.Dimensions.LeftOffset
    },
    title: {
        fontWeight: 'bold',
        fontSize: g.FontSize.MainTitle,
        color: g.Color.White,
    },
    subtitle: {
        fontSize: g.FontSize.MainSubtitle,
        color: g.Color.White,
    },
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        margin: 1,
        paddingTop: 4,
        paddingRight: 8,
        paddingBottom: 4,
        paddingLeft: 8,
    },
    callOutSection: {
        backgroundColor: g.Color.PrimaryAccent,
        padding: g.Dimensions.LeftOffset,
        minHeight: g.Dimensions.CellHeight
    },
    callOutSectionText: {
        fontSize: g.FontSize.MainSubtitle,
        fontStyle: 'italic',
        color: g.Color.White
    },

    tabBar: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    tab: {
        flex: 1,
        height: g.Dimensions.CellHeight,
        backgroundColor: g.Color.SecondaryAccent,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabLeftBorder: {
        borderLeftColor: g.Color.White,
        borderLeftWidth: 0.5
    },
    tabActive: {
        backgroundColor: g.Color.PrimaryAccent
    },
    tabTextActive: {
        fontWeight: 'bold',
        color: g.Color.White
    },

    postCell: {
        padding: g.Dimensions.LeftOffset
    }
});