import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ text, backgroundColor, textColor, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.bottonText, { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    width: 270,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  bottonText: {
    fontFamily: 'Rubik-One',
    fontSize: 22,
  },
};

export default CustomButton;
