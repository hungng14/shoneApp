import React, {Component} from 'react';
import {Dimensions, View, Animated, Easing, ScrollView} from 'react-native';
import HomeScreen from '../screens/Home';
import HeaderApp from '../layouts/Header';
import MenuAPI from '../../api/menu';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.AnimationBgColor = new Animated.Value(0);
  }

  async listMenu() {
    const result = await MenuAPI.list();
    const {success = false} = result;
  }

  componentDidMount() {
    this.listMenu();
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
