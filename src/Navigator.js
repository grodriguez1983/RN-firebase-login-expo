import { DrawerNavigator } from 'react-navigation';

import Second from './modules/Second';
import Login from './modules/Login';
import Signup from './modules/Signup';

const SimpleApp = DrawerNavigator(
  {
    Login: {
      path: '/',
      screen: Login
    },
    Signup: {
      path: '/',
      screen: Signup
    },
    SecondPage: {
      path: '/second',
      screen: Second
    }
  }, {
    initialRouteName: 'Login',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

export default SimpleApp;
