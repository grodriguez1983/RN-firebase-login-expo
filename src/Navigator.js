import React from 'react';
import _ from 'lodash'
import { View } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'


import LandingPage from './modules/LandingPage';
import First from './modules/First';
import Login from './modules/Login';
import Signup from './modules/Signup';

import MenuBar from './modules/MenuBar'


const tabOrder = ['LandingPage', 'First'];

const tabComponents = {
  Home: {
    screen: LandingPage,
    title: 'Dashboar',
   /* activeImg: require('./assets/MenuBar/search/on.png'),
    inactiveImg: require('./assets/MenuBar/search/off.png')*/
  },
  First: {
    screen: First,
    title: 'First',
    /*activeImg: require('./assets/MenuBar/gigs/on.png'),
    inactiveImg: require('./assets/MenuBar/gigs/off.png')*/
  },
};

let TabBarComponent = ({ navigation }) => {
  return (
    <View>
      <MenuBar
        navigation={navigation}
        tabOrder={tabOrder}
        tabComponents={tabComponents}
      />
    </View>
  )
};
/*
const MainScreenNavigator = TabNavigator(tabComponents, {
  order: tabOrder,
  initialRouteName: 'LandingPage',
  tabBarComponent: TabBarComponent,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  lazy: true
});
*/
const Navigation = StackNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    },
    LandingPage: {
      screen: LandingPage
    },
   /* Home: {
       screen: MainScreenNavigator
    }*/
  }, {
    initialRouteName: 'Login',
    headerMode: 'none',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

export default Navigation;
