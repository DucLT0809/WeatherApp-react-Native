import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const RowText = ({
  containerStyle,
  messageTwoStyle,
  message1,
  message2,
  messageOneStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{message1}</Text>
      <Text style={messageTwoStyle}>{message2}</Text>
    </View>
  );
};

export default RowText;
