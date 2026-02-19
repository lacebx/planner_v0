# Planner v0

A cross-platform mobile planning and organization application built with React Native and Expo.

## Overview

Planner v0 is a TypeScript-based mobile application designed to help users organize and manage their tasks and schedules across iOS and Android devices. Built on top of Expo, this app leverages modern React Native development practices with type safety through TypeScript.

## Features

- **Tab-Based Navigation**: Intuitive multi-tab interface for easy navigation between different sections
- **Responsive Design**: Fully responsive layout that works seamlessly on both iOS and Android
- **Dark/Light Theme Support**: Automatic theme switching based on device preferences
- **Modular Architecture**: Well-organized component structure with dedicated components, utilities, and constants
- **Splash Screen**: Branded splash screen for a polished user experience
- **Type-Safe Development**: Full TypeScript support for robust and maintainable code

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based routing)
- **UI Components**: React Navigation with React Native
- **Icons**: FontAwesome (via @expo/vector-icons)
- **Styling**: React Native built-in styling
- **Build Tool**: Expo

## Project Structure

```
planner_v0/
├── app/              # Main application code
│   ├── (tabs)/       # Tab-based screens and navigation
│   ├── modal.tsx     # Modal screen
│   ├── +not-found.tsx # 404 screen
│   └── _layout.tsx   # Root layout configuration
├── components/       # Reusable React components
├── constants/        # Application constants
├── assets/           # Images, fonts, and static assets
├── app.json          # Expo app configuration
├── package.json      # Project dependencies
└── tsconfig.json     # TypeScript configuration
```

## Installation

### Prerequisites

- Node.js 14 or higher
- npm or yarn package manager
- Expo CLI (optional, for advanced development)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/lacebx/planner_v0.git
cd planner_v0
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Run on your device:
   - **iOS**: Press `i` in the terminal or scan the QR code with Xcode
   - **Android**: Press `a` in the terminal or scan the QR code with Expo Go app

## Development

### Running the App

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web (experimental)
npm run web
```

### Building for Production

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Build for both
eas build
```

## Configuration

Key configuration files:

- **app.json**: Expo app configuration including name, version, and build settings
- **tsconfig.json**: TypeScript compiler options
- **babel.config.js**: Babel configuration for JavaScript transformation

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source. See LICENSE file for more details.

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Support

For support, please open an issue on the GitHub repository.
