import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
const IconText = ({iconName, iconColor, bodyText, bodyTextStyle}) => {
  const {container, textTheme} = styles;
  return (
    <View style={container}>
      <FeatherIcon name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
  },
});
export default IconText;
