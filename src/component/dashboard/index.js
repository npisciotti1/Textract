import React from 'react';

import PhotoScan from '../photo-scan';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Dashboard extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to some cool shit!
        </Text>
        <Text style={styles.instructions}>
          Not sure what it does yet, but it does it!
        </Text>
        <PhotoScan />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
