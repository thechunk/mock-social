# MockSocial App

Mobile app for a mock social network using [JSONPlaceholder](https://jsonplaceholder.typicode.com)

## Features

* View users in a list
* User detail displays album previews, user posts and todo items
* View albums in a list or navigate directly into an album from user detail
* Open images to view in detail by pinch & zoom
* Load the location of the user using embedded map view

## Requirements

* Node.js 10
* Xcode 10.2.1
* Android platform-tools 29.0.1
* Android SDK >=6.0

## Setup

1. Clone this repository
   ```bash
   $ git clone https://github.com/thechunk/mock-social.git
   ```
2. From your terminal emulator, navigate to the working directory where this
   code is located
3. Copy `.env.sample` into `.env` and make changes if necessary
4. Execute `npm install` to install dependencies

## Running the App
### iOS
1. Execute `react-native run-ios --simulator` to run the app in iOS Simulator.

### Android
1. Create a file at path `<projectPath>/android/local.properties` with contents
   `sdk.dir=/path/to/Library/Android/sdk`
2. Open the Android emulator
2. Execute `run-native run-android` to run the app in Android emulator

## Notes

This app has been tested on:
* iPhone X iOS 12.2 Simulator image (macOS 10.14.5)
* iPhone SE device on iOS 12.1.2
* Nexus 5 Android 6.0 emulator image (macOS 10.14.5)

If your Android Emulator doesn't have connectivity, try running
```bash
$ ~/Library/Android/sdk/emulator/emulator \
    -avd <avdName> -dns-server 8.8.8.8
```

## Known Issues

* Android 9 image does not load Google Maps correctly