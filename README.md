<img alt="React Native Dark Mode Switcher" src="assets/logo.png" width="1050"/>

[![React Native Dark Mode Switcher](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-dark-mode-switcher)

[![npm version](https://img.shields.io/npm/v/react-native-dark-mode-switcher.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-dark-mode-switcher)
[![npm](https://img.shields.io/npm/dt/react-native-dark-mode-switcher.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-dark-mode-switcher)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Dark Mode Switcher"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-dark-mode-switcher
```

## Peer Dependencies

<b><i>No Dependencies</i><b>

# Usage

## Import

```jsx
import DarkModeSwitcher from "react-native-dark-mode-switcher";
```

## Fundamental Usage

```jsx
<DarkModeSwitcher
  value={switchValue}
  onChange={() => {
    setSwitchValue((previousState: boolean) => !previousState);
  }}
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property |   Type   |  Default  | Description                                                |
| -------- | :------: | :-------: | ---------------------------------------------------------- |
| value    | boolean  |   true    | set the value of the switch                                |
| onChange | function | undefined | set your own function for when the switch value is changed |

## Customization (Optionals)

| Property          |   Type    |    Default    | Description                                           |
| ----------------- | :-------: | :-----------: | ----------------------------------------------------- |
| style             | ViewStyle |    default    | set/override the style object for the outer container |
| containerStyle    | ViewStyle |    default    | set/override the style object for the container       |
| moonStyle         | ViewStyle |    default    | set/override the style object for the moon style      |
| knobStyle         | ViewStyle |    default    | set/override the style object for the knob style      |
| activeColor       |   color   |    "#fff"     | change the `active` background color of switch        |
| inactiveColor     |   color   |    "#000"     | change the `inactive` background color of switch      |
| size              |  number   |      100      | change the size of the switch                         |
| animationDuration |  number   |      200      | change the animation duration                         |
| animationEasing   |  Easing   | Easing.linear | change the animation easing type                      |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Dark Mode Switcher is available under the MIT license. See the LICENSE file for more info.
