import React, {Component} from 'react';
import {Dimensions, View, Animated, Easing, ScrollView} from 'react-native';
import HomeScreen from '../screens/Home';
import HeaderApp from '../layouts/Header';
import Auth from '../../configs/auth';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.AnimationBgColor = new Animated.Value(0);
    (async function() {
      const token = await Auth.getUserLogin();
      console.log(token);
    })();
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.AnimationBgColor, {
        duration: 500,
        toValue: 2,
        easing: Easing.bezier(1, 0, 0, 1),
      }),
    ]).start();
  }

  render() {
    const BgColor = {
      backgroundColor: this.AnimationBgColor.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['#F2CEEC', '#D3ABCC', '#B46DA8'],
      }),
    };

    const {navigation} = this.props;
    const params = navigation.getParam('ScreenName');
    const titleHeader = {
      titleHeader: 'Home',
    };
    return (
      <View>
        <HeaderApp {...titleHeader} />
        <ScrollView>
          <HomeScreen {...BgColor} {...this.props} />
        </ScrollView>
      </View>
    );
  }
}
