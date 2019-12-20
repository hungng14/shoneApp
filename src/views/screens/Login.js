import React from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Button from 'react-native-button';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {parse} from '@fortawesome/fontawesome-svg-core';
parse.transform('grow-2 left-4 rotate-15 up-10');
// import GradientButton from 'react-native-gradient-buttons';
import style from '../../styles/screens/Login';

const screenLogin = props => {
  const {modifyValue, state = {}} = props;
  // const colorsGradient1 = [
  //   '#A91EEA',
  //   '#B138E9',
  //   '#B953E8',
  //   '#BF6AE6',
  //   '#C37FE3',
  //   ];
  const colorsGradient = [
    '#2F4AD3',
    '#475ED5',
    '#6B7CD4',
    '#475ED5',
    '#2F4AD3',
  ];

  return (
    <LinearGradient colors={colorsGradient} style={style.container}>
      <View style={style.logo}>
        <Text style={style.textLogo}>shone</Text>
      </View>
      <View style={style.form}>
        <View style={style.viewFormInput}>
          <TextInput
            style={style.inputText}
            value={`${state.username || ''}`}
            onChangeText={val => modifyValue('username', val)}
            placeholder="Username"
          />
          <TextInput
            style={style.inputText}
            value={`${state.password || ''}`}
            onChangeText={val => modifyValue('password', val)}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={style.viewBtn}>
            {/* <GradientButton
              style={style.btn}
              gradientBegin="#874f00"
              gradientEnd="#f5ba57"
              gradientDirection="diagonal">
              Sign In
            </GradientButton> */}
            <Button onPress={() => props.signIn()} style={style.btn}>
              Sign In
            </Button>
          </View>
          <View style={style.viewWrapperText}>
            <Text style={style.textForgorPassword}> or login with</Text>
          </View>
          <View style={style.viewWrapperIcon}>
            <View style={style.wrapperIcon}>
              <Button onPress={() => props.signIn()} style={style.btn}>
                <FontAwesomeIcon
                  style={style.icon}
                  size={30}
                  top={14}
                  left={13.5}
                  icon={['fab', 'twitter']}
                />
              </Button>
            </View>
            <View style={style.wrapperIcon}>
              <FontAwesomeIcon
                style={style.icon}
                size={30}
                top={14}
                left={13.5}
                icon={['fab', 'facebook-f']}
              />
            </View>
            <View style={style.wrapperIcon}>
              <Button
                onPress={() => props.signInWithGoogle()}
                style={style.btn}>
                <FontAwesomeIcon
                  style={style.icon}
                  size={30}
                  top={14}
                  left={13.5}
                  icon={['fab', 'google']}
                />
              </Button>
            </View>
          </View>
          <View style={style.viewWrapperText}>
            <Text style={style.textForgorPassword}> Forgot Password?</Text>
          </View>
        </View>
      </View>
      <View style={[styleWaiting.wrapper, {...state.styleWaiting}]}>
        <View style={styleWaiting.container}>
          <Text style={styleWaiting.text}> Loading...</Text>
          <Image
            style={styleWaiting.image}
            source={require('../../assets/images/loading.gif')}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
const {width, height} = Dimensions.get('window');
const heightScreenWaiting = height / 4;
const halfHeight = heightScreenWaiting / 2;
const positionTop = heightScreenWaiting + halfHeight;
const styleWaiting = StyleSheet.create({
  wrapper: {
    display: 'none',
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    position: 'relative',
  },
  container: {
    backgroundColor: '#fff',
    height: heightScreenWaiting,
    width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: positionTop,
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default screenLogin;
