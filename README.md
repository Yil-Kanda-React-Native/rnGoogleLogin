# rnGoogleLogin

This is an example of logging into a Google account, through React Native.

## Setup

This project was started by following the steps provided by the DEV Community tutorial: ["Get Started with React Native + Google Sign In"](https://dev.to/anwargul0x/get-started-with-react-native-google-sign-in-18i5).

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### npm install

It is important to install the project dependencies through the command:

<pre>
npm install

or

yarn install
</pre>

### npx react-native start

Runs your app in development mode.

Open it in the Expo app on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the --reset-cache flag to the start script:

<pre>
npx react-native start --reset-cache

or

yarn start -- --reset-cache
</pre>

### npx react-native test

Runs the jest test runner on your tests.

### npx react-native run-ios

Like `npx react-native start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

### npx react-native run-android

Like `npx react-native start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://reactnative.dev/docs/getting-started) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of adb available to Create React Native App.

### Example

Click on "Access with Google".

![Main screen](/img/01.jpg)

The screen to choose the account with which to log in will appear.

![Google accounts in Android](/img/02.jpg)

The logging information is displayed on the console, as well as the logging information.

![Console](/img/03.png)
