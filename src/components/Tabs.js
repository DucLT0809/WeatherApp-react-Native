import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CurrentWeather from '../screens/CurrentWeather';
import City from '../screens/City';
import UpcomingWeather from '../screens/UpcomingWeather';
const Tab = createBottomTabNavigator();
const Tabs = ({weather}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}>
      <Tab.Screen
        name={'Current weather'}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="droplet"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}>
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="clock"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}>
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="chrome"
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}>
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
