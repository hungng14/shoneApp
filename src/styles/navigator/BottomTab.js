import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const widthItem = screenWidth / 3;

export default StyleSheet.create({
  wrapperIcon: {
    flex: 1,
    marginBottom: -5,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthItem,
    overflow: 'hidden',
  },
  bgColorDefault: {
    backgroundColor: '#C8CBD6',
  },
  bgColorActive: {
    backgroundColor: '#F6F7FA',
  },
  viewTest: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
  },
});
