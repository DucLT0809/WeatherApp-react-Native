import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RowText from '../components/RowText';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {weatherType} from '../utilities/weatherType';
const CurrentWeather = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempature,
    feel,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;
  const {
    main: {temp, feels_like, temp_max, temp_min},
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;
  return (
    <View
      style={[
        wrapper,
        {backgroundColor: weatherType[weatherCondition].backgroundColor},
      ]}>
      <View style={container}>
        <FeatherIcon
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempature}>{temp}</Text>
        <Text style={feel}>{`Feel like ${feels_like}`}</Text>
        <RowText
          message1={`High ${temp_max}°`}
          message2={`Low ${temp_min}°`}
          containerStyle={highLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />
        <RowText
          message1={weather[0].description}
          message2={weatherType[weatherCondition].message}
          containerStyle={bodyWrapper}
          messageOneStyle={description}
          messageTwoStyle={message}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  tempature: {
    color: 'black',
    fontSize: 48,
  },
  feel: {
    color: 'black',
    fontSize: 48,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    paddingLeft: 35,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    alignSelf: 'center',
  },
  message: {
    fontSize: 30,
    alignItems: 'center',
    marginRight: 20,
    textAlign: 'center',
  },
});
export default CurrentWeather;
