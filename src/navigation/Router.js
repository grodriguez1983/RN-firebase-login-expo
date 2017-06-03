import { createRouter } from '@expo/ex-navigation';

import First from '../modules/First';
import Login from '../modules/Login';
import Signup from '../modules/Signup';
import LandingPage from '../modules/LandingPage';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  landingPage: () => LandingPage,
  links: () => First,
  settings: () => Signup,
  signup: () => Signup,
  rootNavigation: () => RootNavigation,
  login: () => Login
}));
