import React from 'react';
import { Button, Alert } from 'react-native';


const Buttons = () => (
  <Button
    onPress={() => {
      Alert.alert('You tapped the button!');
    }}
    title="Press Me"
  />
);


// export Header JS file for use by other part of the application

export default Buttons;
