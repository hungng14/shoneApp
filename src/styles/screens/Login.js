import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    height: screenHeight,
    flex: 1,
  },
  logo: {
    flex: (screenHeight * 1.85) / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: (screenHeight * 0.4) / 5,
    color: '#FFFEFE',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadowColor: '#DFDADA',
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 10,
  },
  form: {
    flex: (screenHeight * 3.15) / 5,
  },
  viewFormInput: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputText: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingStart: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  viewBtn: {
    height: 50,
    marginTop: 20,
  },
  btn: {
    height: 50,
    borderRadius: 4,
    textAlign: 'center',
    // backgroundColor: '#DA3190',
    backgroundColor: '#102ECB',
    alignItems: 'center',
    fontSize: 20,
    textAlignVertical: 'center',
    color: '#FFFFFF',
  },
  viewWrapperText: {
    marginTop: 10,
  },
  viewWrapperIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  wrapperIcon: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: 'transparent',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#D1D2DA',
  },
  textForgorPassword: {
    color: '#F9F1F5',
    fontSize: 16,
    textAlign: 'center',
  },
  positionCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
});
