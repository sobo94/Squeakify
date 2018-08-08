import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/header';
import Button from './src/components/button';

export default class App extends React.Component {
  render() {
   return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.buttonContainer}>
          <Button />
        </View>
      </View>
    );
  }
}

// Styling and Layout of App Container
const styles = StyleSheet.create({
  // Container Styling
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 380,
    height: 50,
    backgroundColor: 'skyblue',
  },
});
