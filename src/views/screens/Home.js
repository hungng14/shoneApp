import React, {Component} from 'react';
import {Text, View, Animated, Image} from 'react-native';
import Button from 'react-native-button';
import Video from 'react-native-video';
import styleHome from '../../styles/screens/Home';

const HomeScreen = props => {
  return (
    <Animated.View
      style={
        (styleHome.container,
        {backgroundColor: '#BECBD5' || props.backgroundColor})
      }>
      <View style={styleHome.box}>
        <Image
          style={styleHome.image}
          source={{
            uri:
              'https://metro.co.uk/wp-content/uploads/2019/10/DLT-2-a41d.jpg?quality=90&strip=all&crop=0px%2C98px%2C1200px%2C600px&resize=650%2C325',
          }}
        />
        <View style={styleHome.wrapperInfo}>
          <View style={styleHome.wrapperDetail}>
            <Text style={styleHome.textName}>Food Name</Text>
            <Text style={styleHome.textCost}>$20</Text>
          </View>
          <View style={styleHome.wrapperBtn}>
            <Button style={styleHome.btnOrder}>Add to cart</Button>
          </View>
        </View>
      </View>
      <View style={styleHome.box}>
        <Image
          style={styleHome.image}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJWglPNVETEVrALDt_cYvBrPvsZW1ReeCUMGi6E9319zdTVFB',
          }}
        />
        <View style={styleHome.wrapperInfo}>
          <View style={styleHome.wrapperDetail}>
            <Text style={styleHome.textName}>Food Name</Text>
            <Text style={styleHome.textCost}>$20</Text>
          </View>
          <View style={styleHome.wrapperBtn}>
            <Button style={styleHome.btnOrder}>Add to cart</Button>
          </View>
        </View>
      </View>
      <View style={styleHome.box}>
        <Image
          style={styleHome.image}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wRgMS9PVumJwluXw3EpimA9URjtsMHlmTm1xPKQpmy2nUi3rPQ',
          }}
        />
        <View style={styleHome.wrapperInfo}>
          <View style={styleHome.wrapperDetail}>
            <Text style={styleHome.textName}>Food Name</Text>
            <Text style={styleHome.textCost}>$20</Text>
          </View>
          <View style={styleHome.wrapperBtn}>
            <Button style={styleHome.btnOrder}>Add to cart</Button>
          </View>
        </View>
      </View>
      <View style={styleHome.boxLast}>
        <Image
          style={styleHome.image}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF7nsd9nupjTuUrnBk6CkK9hGBocMe-BqWxyXKmNvhJbHiA42',
          }}
        />
        <View style={styleHome.wrapperInfo}>
          <View style={styleHome.wrapperDetail}>
            <Text style={styleHome.textName}>Food Name</Text>
            <Text style={styleHome.textCost}>$20</Text>
          </View>
          <View style={styleHome.wrapperBtn}>
            <Button style={styleHome.btnOrder}>Add to cart</Button>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default HomeScreen;
