import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Tabs from './src/components/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import useWeather from './src/hooks/useWeather';
import ErrorItem from './src/components/ErrorItem';

const App = () => {
  const {isLoading, error, weather, lat, long} = useWeather();

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  // set loading screen

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <ActivityIndicator size={'large'} color={'blue'} />
      ) : (
        <ErrorItem />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
export default App;
