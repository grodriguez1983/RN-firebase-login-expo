import React, { Component } from 'react';
import { View,  Button } from 'react-native';

import styles from './styles';

export  default class LandingPage extends Component  {

  signOut () {
    console.log('click')
    const  {
      signOut,
      navigation: {
        navigate
      }
    } = this.props;
    signOut().then(() => {
      navigate('Login');
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Button title="Log out"  onPress={this.signOut.bind(this)} />
      </View>
    );
  }
}
