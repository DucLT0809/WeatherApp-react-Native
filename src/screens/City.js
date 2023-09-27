import React from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';
const City = ({weatherData}) => {
  const {
    container,
    cityName,
    cityText,
    countryText,
    populationWrapper,
    populationText,
    image,
    riseSetText,
    riseSetWrapper,
    rowLayout,
  } = styles;
  const {name, country, population, sunrise, sunset} = weatherData;
  return (
    <View style={container}>
      <ImageBackground
        source={require('../../assets/tianjin-2185510_1280.jpg')}
        tianjin-2185510_1280
        style={image}>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryText, cityText]}>{country}</Text>
        <View style={populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`population :${population}`}
            bodyTextStyle={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'black'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyle={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'black'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginTop: 0,
  },
  cityName: {
    fontSize: 40,
  },
  countryText: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    marginTop: 30,
    alignItems: 'center',
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
