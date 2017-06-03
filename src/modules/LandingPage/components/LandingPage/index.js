import React, { Component } from 'react';
import { View,  Button } from 'react-native';

import styles from './styles';

export  default class LandingPage extends Component  {

  signOut () {
    console.log('click');
    const  {
      signOut,
      navigator,
      navigation
    } = this.props;
    signOut().then(() => {
      //navigator.push('login');
      navigator.popToTop();
      navigation.getNavigator('root').popToTop();
      navigation.getNavigator('root').push('login');
    });
  }

  render () {
    console.log('props', this.props);
    return (
      <View style={styles.container}>
        <Button title="Log out"  onPress={this.signOut.bind(this)} />
      </View>
    );
  }
}
