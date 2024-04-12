# Choose-a-Booze

The goal of The Drink App is to provide a way for users to get suggestions on what alcoholic beverage to try, randomly or based on criteria.

Whether it's finding the perfect drink pairing for date night or something new for a night out with friends.

This app aims to educate users about beverages and pairings, and as a bonus, makes deciding on what to buy less scary/time-consuming.

React Native helps make the user interface intuitive; the user will be able to navigate through a component-based mobile application which works on web as well.

# Getting Started
* [Necessary Packages & Dependencies](#necessary-packages--dependencies)
* [Usage Guide](#usage-guide)

## Necessary Packages & Dependencies
Firstly, install node.js and run npm init to create node_modules. This project was built using node.js 10.2.4

### Flask
Flask requires these packages to manage the server.
Copy and paste into the terminal while in the server folder.
```
-pip install google-cloud-firestore
-pip install Flask
-pip install requests
-pip install flask-cors
npm i -g concurrently
```

### React Native
Below are the required react native packages.
Install the dependencies in the client folder.
```
npm install @react-navigation/native
npm install react-native-splash-screen
npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-sectioned-multi-select @expo/vector-icons 
```

## Running the App
We use Expo Go to serve the app on mobile. Begin by installing expo go on your mobile device and start the server on your laptop or PC by running `npm run start-flask` in one terminal, and `npm start` in another. Finally, expo will prompt the user to start the server for web, android, or iOS; then scan the QR code provided.
