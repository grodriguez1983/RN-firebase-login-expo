import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

import KeyboardAwareView  from '../../../../shared/components/KeyboardAwareView';
import { TextField } from '../../../../shared/reduxForm/TextField';
import styles from './styles';

import background from  '../../../../../assets/login/start_bg.png';
import backIcon from  '../../../../../assets/login/back.png';
import personIcon from  '../../../../../assets/login/signup_person.png';
import lockIcon from  '../../../../../assets/login/signup_lock.png';
import emailIcon from  '../../../../../assets/login/signup_email.png';
import birthdayIcon from  '../../../../../assets/login/signup_birthday.png';


class Signup extends Component {

  onJoin(createUserWithEmailAndPassword, values) {
    const { email, password} = values;
    createUserWithEmailAndPassword({ email, password });
  }

  render() {
    const {
      props: {
        navigation: {
          navigate
        },
        handleSubmit,
        createUserWithEmailAndPassword
      },
      onJoin
    } = this;

    return (
        <KeyboardAwareView>
      <ScrollView style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.bg, styles.background]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>
              <TouchableOpacity style={styles.headerBackButtonView}  onPress={() => { navigate('login'); }}>
                <Image
                  source={backIcon}
                  style={styles.backButtonIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <Field
                style={[styles.input, styles.whiteFont]}
                placeholder="Name"
                name="name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                component={TextField}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={emailIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <Field
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                name="email"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                component={TextField}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={lockIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <Field
                secureTextEntry
                style={[styles.input, styles.whiteFont]}
                placeholder="Password"
                name="password"
                underlineColorAndroid='transparent'
                placeholderTextColor="#FFF"
                component={TextField}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={birthdayIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <Field
                style={[styles.input, styles.whiteFont]}
                placeholder="Birthday"
                name="birthday"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                component={TextField}
              />
            </View>

          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity onPress={handleSubmit((values) => onJoin(createUserWithEmailAndPassword, values))}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Join</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {  navigate('login'); }}>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </ScrollView>
        </KeyboardAwareView>
    );
  }
}

export default reduxForm({
  form: 'Signup'
})(Signup);
