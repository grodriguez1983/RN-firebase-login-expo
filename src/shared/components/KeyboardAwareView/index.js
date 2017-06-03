import React, { Component } from 'react';
import {
  Keyboard,
  type KeyboardEventListener,
  type NativeEvent,
  View,
  Dimensions
} from 'react-native';

export type Props = {
  height?: number,
  children?: any
};

type State = {
  keyboardHeight: number
};

export default class KeyboardAwareView extends Component {
  props: Props;
  state: State;

  keyboardDidShowListener: KeyboardEventListener;
  keyboardDidHideListener: KeyboardEventListener;

  constructor (props: Props) {
    super(props);

    this.state = {
      keyboardHeight: 0
    };
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow.bind(this)
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide.bind(this)
    );
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow (e: NativeEvent) {
    this.setState({
      keyboardHeight: e.endCoordinates.height
    });
  }

  keyboardDidHide () {
    this.setState({
      keyboardHeight: 0
    });
  }

  render () {
    const height = (this.props.height || Dimensions.get('window').height) -
      this.state.keyboardHeight;

    return (
      <View style={{ flex: 1, maxHeight: height }}>
        {this.props.children}
      </View>
    );
  }
}