import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styleHeader from '../../styles/common/Header';

export default class Header extends Component {
  render() {
    return (
      <View style={styleHeader.wrapperText}>
        <Text style={styleHeader.title}> {this.props.titleHeader} </Text>
      </View>
    );
  }
}
