import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Picker,
  ProgressBarAndroid,
  Text,
} from 'react-native';
import Button from 'react-native-button';
import NewsScreen from '../screens/News';
import HeaderApp from '../layouts/Header';
import Video from 'react-native-video';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  onLoad() {
    console.log('onload');
  }
  render() {
    const {navigation} = this.props;
    const params = navigation.getParam('ScreenName');
    const titleHeader = {
      titleHeader: 'News',
    };
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <HeaderApp {...titleHeader} />
        <View style={styles.videoContainer}>
          <Text>View5o</Text>
          <Video
            // eslint-disable-next-line prettier/prettier
          source={{uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}} // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onEnd={this.onEnd} // Callback when playback finishes
            onError={this.videoError}
            style={styles.video}
        />
        <Text>View5o</Text>
      </View>
      
        <Text>fsfsd</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
