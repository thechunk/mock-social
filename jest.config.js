module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|react-navigation|react-native-screens|react-native-gesture-handler|' +
            'react-navigation-stack|@react-navigation|react-native-config|@react-native-community)/)'
    ],
    setupFiles: [
        './node_modules/react-native-gesture-handler/jestSetup.js',
        '<rootDir>setup-tests.tsx'
    ],
    snapshotSerializers: ['enzyme-to-json/serializer']
}
