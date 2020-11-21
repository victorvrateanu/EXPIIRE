import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/1.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    alignSelf: "center"
  },

  logo: {
    height: 200,
    width: 200,
    paddingTop: 10,
  }
});
