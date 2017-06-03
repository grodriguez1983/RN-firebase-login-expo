import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Router from './navigation/Router';
import cacheAssetsAsync from './shared/utilities/cacheAssetsAsync';

import store from './store';
//import Navigation from './Navigator';
import images from '../assets/images/expo-wordmark.png';
import spaceMono from '../assets/fonts/SpaceMono-Regular.ttf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
});

class App extends Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [images],
        fonts: [
          FontAwesome.font,
          { 'space-mono': spaceMono }
        ]
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }


  render() {
    if (this.state.appIsReady) {
      return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute={Router.getRoute('login')}
            />
          </NavigationProvider>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
        </View>
      </Provider>
      );
    }  else {
      return <Expo.AppLoading />;
    }
  }
}



export default App;
