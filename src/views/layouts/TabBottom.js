/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const screenWidth = Dimensions.get('window').width;

/** style */
import styleBottomTab from '../../styles/navigator/BottomTab';

let ScreenCurrent = '';
export default class TabBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: new Animated.Value(0),
    };
  }

  chooseScreen(screenChose) {
    const {navigation} = this.props;
    if (ScreenCurrent !== screenChose) {
      ScreenCurrent = screenChose;
      navigation.navigate({routeName: screenChose});
    }
  }

  render() {
    const {focused, icon, screen} = this.props;
    if (focused) {
      if (!ScreenCurrent) {
        ScreenCurrent = screen;
      }
    }
    return (
      <TouchableOpacity
        style={
          focused ? styleBottomTab.bgColorActive : styleBottomTab.bgColorDefault
        }
        onPress={() => this.chooseScreen(screen)}>
        <View style={styleBottomTab.wrapperIcon}>
          <FontAwesomeIcon
            color={focused ? '#00030C' : '#77787E'}
            size={25}
            icon={icon}
          />
          <Text
            style={{
              color: focused ? '#00030C' : '#77787E',
            }}>
            {screen}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
