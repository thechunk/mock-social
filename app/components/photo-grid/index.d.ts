interface IPhotoGrid {

}

interface IPhotoGridCell {
    onPress?: (event: import('react-native').GestureResponderEvent) => void,
    url: string,
    style: import('react-native').StyleProp<import('react-native').ImageStyle>
}