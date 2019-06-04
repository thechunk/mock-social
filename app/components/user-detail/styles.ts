import {StyleSheet} from 'react-native';
import * as g from '../../styles/global';

export default StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: 'rgba(0, 100, 100, 1.0)',
        padding: g.Dimensions.LeftOffset
    },
    callOutSectionText: {
        fontSize: g.FontSize.MainSubtitle,
        fontStyle: 'italic',
        color: g.Color.White
    }
});