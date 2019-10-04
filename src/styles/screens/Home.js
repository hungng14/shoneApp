import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const heightBox = height / 5;
const heightImage = heightBox - 20;
const widthImage = (width * 2) / 5;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: heightBox,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  boxLast: {
    height: heightBox,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 70,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  image: {
    height: heightImage,
    width: widthImage,
    borderColor: '#F6E6E0',
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 10,
  },
  wrapperInfo: {
    marginTop: 5,
    flex: 1,
  },
  wrapperDetail: {
    marginBottom: 20,
  },
  textName: {
    fontSize: 17,
  },
  textCost: {
    fontSize: 15,
    fontWeight: '100',
  },
  wrapperBtn: {
    flex: 1,
    bottom: 10,
    position: 'absolute',
  },
  btnOrder: {
    fontSize: 15,
    backgroundColor: '#1E92E7',
    color: '#FFFFFF',
    borderRadius: 4,
    padding: 5,
  },
  mrgBt20: {
    marginBottom: 20,
  },
});
