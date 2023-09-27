import React, {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';

import Geo from 'react-native-geolocation-service';
import {WEATHER_API_KEY} from '@env';
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const useWeather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`,
      );
      const data = await resp.json();
      setWeather(data);
    } catch (error) {
      setError('Could not fetch weather');
    } finally {
      setIsLoading(false);
    }
  };

  const getLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use Geolocation');
        Geo.getCurrentPosition(
          position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('You cannot use Geolocation');
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (lat !== null && long !== null) {
      fetchWeatherData();
    }
  }, [lat, long]);

  return {isLoading, error, weather, lat, long};
  // test error
  // return [isLoading, true, []];
};

export default useWeather;
