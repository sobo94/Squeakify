import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = style;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {' '}
SQUEAKIFY!
        {' '}
      </Text>
    </View>
  );
};

const style = {
  viewStyle: {
    backgroundColor: 'darkgrey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 18,
  },
};

export default Header;
