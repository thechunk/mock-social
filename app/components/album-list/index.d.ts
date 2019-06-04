interface IAlbumList {

}

interface IAlbumListCell {
    key: number,
    id: number,
    title: string,
    subtitle?: string,
    onPress?: (event: import('react-native').GestureResponderEvent) => void,
    cellStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>,
    imageStyle?: import('react-native').StyleProp<import('react-native').ImageStyle>,
    titleStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
    subtitleStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
}
