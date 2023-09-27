import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from 'react-native';

import ListItem from '../components/ListItem';

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({item}) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
  );
  const {container, image} = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/heaven-3335585_1280.jpg')}
        style={image}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },

  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
