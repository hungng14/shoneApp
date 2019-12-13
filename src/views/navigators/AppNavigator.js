import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

/** screen */
import TabBottom from '../layouts/TabBottom';
/** screen */
import WaitingContainer from '../containers/Waiting';
import LoginContainer from '../containers/Login';
import HomeContainer from '../containers/Home';
import NewsContainer from '../containers/News';
import {faHome, faNewspaper} from '@fortawesome/free-solid-svg-icons';

const tabBarOptions = {
  showLabel: false,
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  // tarBarLabel: '',
};

const AppBottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Home',
        tabBarIcon: ({focused}) => {
          const props = {
            focused,
            icon: faHome,
            screen: 'Home',
            navigation,
          };
          return <TabBottom {...props} />;
        },
        tabBarOptions,
      };
    },
  },
  News: {
    screen: NewsContainer,
    navigationOptions: ({navigation}) => {
      return {
        title: 'News',
        tabBarIcon: ({focused}) => {
          const props = {
            focused,
            icon: faNewspaper,
            screen: 'News',
            navigation,
          };
          return <TabBottom {...props} />;
        },
        tabBarOptions,
      };
    },
  },
});

const AppStackNavigator = createStackNavigator(
  {
    Waiting: {screen: WaitingContainer, navigationOptions: {header: null}},
    Login: {screen: LoginContainer, navigationOptions: {header: null}},
    LoggedIn: {
      screen: AppBottomTabNavigator,
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'Waiting',
  },
);

export default createAppContainer(AppStackNavigator);
