import { DrawerNavigator } from 'react-navigation';

import LandingPage from './modules/LandingPage';
import Login from './modules/Login';
import Signup from './modules/Signup';

const Navigator = DrawerNavigator(
  {
    Login: {
      path: '/',
      screen: Login
    },
    Signup: {
      path: '/',
      screen: Signup
    },
    LandingPage: {
      path: '/LandingPage',
      screen: LandingPage
    }
  }, {
    initialRouteName: 'Login',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

export default Navigator;
