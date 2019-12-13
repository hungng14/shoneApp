/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';
import ThemeToaster from './src/styles/common/ThemeToaster';
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
    return (
      <ThemeProvider theme={ThemeToaster}>
        <ToastProvider>
          <AppStackNavigator />
        </ToastProvider>
      </ThemeProvider>
    );
  }
}
