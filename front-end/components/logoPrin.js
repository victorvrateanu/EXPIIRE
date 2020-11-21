import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function LogoPrin() {
  return (
    <View style={styles.container}> 
      <Image style={styles.logo} source={require('../assets/1.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  logo: {
    height: 200,
    width: 200,
    alignSelf:'center',
    top: -30,
    left: -45,
  }
});
