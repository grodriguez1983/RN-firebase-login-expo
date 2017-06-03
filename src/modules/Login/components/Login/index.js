import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Field, reduxForm } from 'redux-form';


import { TextField } from '../../../../shared/reduxForm/TextField';
import KeyboardAwareView  from '../../../../shared/components/KeyboardAwareView';
import styles from './styles';

import background from '../../../../../assets/login/start_bg.png';
import mark from '../../../../../assets/login/login1_mark.png';
import lockIcon from '../../../../../assets/login/login1_lock.png';
import personIcon from '../../../../../assets/login/login1_person.png';

class LoginScreen extends Component {

  onLogin(values) {
    const { email, password} = values;
    const { 
      navigator,
      signInWithEmailAndPassword
    } = this.props;
    signInWithEmailAndPassword({ email, password }).then(() => {
      navigator.push('rootNavigation');
    });
  }

  componentWillMount() {
    const { 
      navigator,
      rememberSession
    } = this.props;
    rememberSession().then(() => {
      navigator.push('rootNavigation');
    });
  }

  render() {
    const {
      navigator,
      authenticationState: {
        loading
      },
      handleSubmit
    } = this.props;
    if (loading) {
      return (
        <View style={styles.container}>
          <Image source={background} style={[styles.background, styles.loadingBackground]} resizeMode="cover">
            <ActivityIndicator
              size="large"
              style={styles.loading}
            />
          </Image>
        </View>
      );
    }

    return (
      <KeyboardAwareView>
        <View style={styles.container}>
          <Image source={background} style={styles.background} resizeMode="cover">
            <View style={styles.markWrap}>
              <Image source={mark} style={styles.mark} resizeMode="contain" />
            </View>
            <View style={styles.wrapper}>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <Field
                  placeholder="Email"
                  name="email"
                  placeholderTextColor="#FFF"
                  style={[styles.input, styles.whiteFont]}
                  underlineColorAndroid='transparent'
                  component={TextField}
                />
              </View>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <Field
                  placeholderTextColor="#FFF"
                  placeholder="Password"
                  name="password"
                  style={[styles.input, styles.whiteFont]}
                  underlineColorAndroid='transparent'
                  component={TextField}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity activeOpacity={.5}>
                <View>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={.5} onPress={handleSubmit(this.onLogin.bind(this))}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.signupWrap}>
                <Text style={styles.accountText}>{'Don\'t have an account?'}</Text>
                <TouchableOpacity activeOpacity={.5} onPress={() => navigator.push('signup')}>
                  <View>
                    <Text style={styles.signupLinkText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Image>
        </View>
      </KeyboardAwareView>
    );
  }
}

export default reduxForm({
  form: 'LoginScreen'
})(LoginScreen);
