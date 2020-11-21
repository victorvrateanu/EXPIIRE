import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

// You can import from local files
import Logo from '../components/logo.js';

// or any pure javascript modules available in npm
import { Card, TextInput } from 'react-native-paper';

export default function App() {
  return (
    <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>
    <ScrollView>
    <View style={styles.container}>
    <View>
    <Logo/>
    <Text style={styles.textshadow}>Creati un cont nou </Text>
    <TextInput style={styles.input} 
      placeholder = "Username"
      />
      <TextInput style={styles.input}
      placeholder = "Parola"
      secureTextEntry
       />
      <TextInput style={styles.input}
      placeholder = "Confirmati parola"
      secureTextEntry
       />
     <TouchableOpacity
      onPress={() => alert('Contul a fost creat')
     }>
     <LinearGradient
      colors={["#60c640", "#f3f72e"]}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Creati contul </Text>
     </LinearGradient>    
     </TouchableOpacity>
    
     </View>
    </View>
    </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent:'center',
  },
  userBtn: {
   backgroundColor: "#FFD700", 
   padding: 15,
   width: "45%",
   textAlign: 'center',
   borderRadius: 20,
   borderWidth: 1,
   fontSize: 18,
   alignSelf: 'center',
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
   
  },
  textshadow:{
    fontSize:25,
    color:'#FFFFFF',
    fontFamily:'Times New Roman',
    paddingBottom: 10,
    textShadowColor:'#0d0900',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    alignSelf: 'center'
  },


   appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
appButtonContainer: {
    elevation: 8,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
   
  },
});
