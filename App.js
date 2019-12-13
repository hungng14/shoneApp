/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee);

import AppStackNavigator from './src/views/navigators/AppNavigator';

export default class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}
