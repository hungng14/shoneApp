import React, {Component, useState, useEffect} from 'react';
import {Text, View, Animated, Image} from 'react-native';
import Button from 'react-native-button';
import styleHome from '../../styles/screens/Home';
import MenuAPI from '../../api/menu';
const _foods = [
  {
    uri:
      'https://metro.co.uk/wp-content/uploads/2019/10/DLT-2-a41d.jpg?quality=90&strip=all&crop=0px%2C98px%2C1200px%2C600px&resize=650%2C325',
    price: 'Food Name',
    name: '$20',
  },
  {
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJWglPNVETEVrALDt_cYvBrPvsZW1ReeCUMGi6E9319zdTVFB',
    price: 'Food Name',
    name: '$20',
  },
  {
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wRgMS9PVumJwluXw3EpimA9URjtsMHlmTm1xPKQpmy2nUi3rPQ',
    price: 'Food Name',
    name: '$20',
  },
  {
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF7nsd9nupjTuUrnBk6CkK9hGBocMe-BqWxyXKmNvhJbHiA42',
    price: 'Food Name',
    name: '$20',
  },
];
function HomeScreen(props, tryAgain = true) {
  const [foods, setFood] = useState(_foods);
  const [count, setCount] = useState(0);
  function getListFood() {
    MenuAPI.list().then(res => {
      const {data} = res;
      console.log(data);
      setFood(data.docs);
      setCount(count + 1);
    });
  }
  useEffect(() => {
    getListFood();
  }, [count === 2]);

  return (
    <Animated.View
      style={
        (styleHome.container,
        {backgroundColor: '#BECBD5' || props.backgroundColor})
      }>
      {console.log('tui o day')}
      {foods.map((item, idx) => (
        <View
          key={String(idx)}
          style={foods.length !== idx + 1 ? styleHome.box : styleHome.boxLast}>
          <Image
            style={styleHome.image}
            source={{
              uri: item.uri,
            }}
          />
          <View style={styleHome.wrapperInfo}>
            <View style={styleHome.wrapperDetail}>
              <Text style={styleHome.textName}>{item.name}</Text>
              <Text style={styleHome.textCost}>{item.price}</Text>
            </View>
            <View style={styleHome.wrapperBtn}>
              <Button style={styleHome.btnOrder}>Add to cart</Button>
            </View>
          </View>
        </View>
      ))}
    </Animated.View>
  );
}

export default HomeScreen;
