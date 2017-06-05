import { StackNavigator, TabNavigator } from 'react-navigation';

import First from '../modules/First';
import Login from '../modules/Login';
import Signup from '../modules/Signup';
import LandingPage from '../modules/LandingPage';
//import RootNavigation from './RootNavigation';

const MyApp = TabNavigator({
  Home: {
    screen: LandingPage
  },
  Notifications: {
    screen: First
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63'
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  lazy: true
});


export default StackNavigator({
  home: {
    screen: LandingPage
  },
  links: {
    screen: First
  },
  settings: {
    screen: Signup
  },
  login: {
    screen: Login
  },
  rootNavigation: {
    screen: MyApp
  },
  signup: {
    screen: Signup
  }
},
  {
    initialRouteName: 'login',
    headerMode: 'none'
  }
);
