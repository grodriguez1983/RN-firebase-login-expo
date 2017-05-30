import React, { Component } from 'react';
import { TextInput } from 'react-native';

export class TextField extends Component {
  render() {
    return (
      <TextInput {...this.props} {...this.props.input} />
    );
  }
}