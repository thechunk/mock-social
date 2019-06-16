interface ILoadedImage {
    showSpinner?: boolean
}
interface ILoadedImageState {
    opacity: import('react-native').Animated.Value,
    loading: boolean
}
