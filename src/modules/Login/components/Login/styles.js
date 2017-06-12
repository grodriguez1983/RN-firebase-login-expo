import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30
  },
  mark: {
    width: null,
    height: null,
    flex: 1
  },
  background: {
    width,
    height,
    padding: 20
  },
  wrapper: {
    paddingVertical: 30
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 20,
    width: 20
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#FF3366',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18
  },
  forgotPasswordText: {
    color: '#D8D8D8',
    backgroundColor: 'transparent',
    textAlign: 'right',
    paddingRight: 15
  },
  signupWrap: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountText: {
    color: '#D8D8D8'
  },
  signupLinkText: {
    color: '#FFF',
    marginLeft: 5
  },
  whiteFont: {
    color: '#FFF'
  },
  loading: {
    transform: [{ scale: 2}]
  },
  loadingBackground: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;