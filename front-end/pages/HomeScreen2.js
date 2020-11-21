import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/logo';
import { Button, Card,Platform,TextInput, } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

class HomeScreen extends React.Component {
  render() {
    return (
    <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={styles.gradient}>  

    <View style={styles.container}>
    
      <Logo/>
      <Text style={styles.textshadow}>
       Bun venit in EXPIIRE
      </Text>
      <Text style={styles.textshadow}>
       Va rugam, autentificati-va!
      </Text>
      <TextInput style={styles.input} 
      placeholder = "Username"
      />
      <TextInput style={styles.input}
      placeholder = "Parola"
      secureTextEntry
       />
     
    <View style={styles.btnContainer}>
      <TouchableOpacity 
       onPress={() => this.props.navigation.navigate('Produse')
       }>
        <LinearGradient
      colors={["#60c640", "#f3f72e"]}
      style={styles.appButtonContainer2}>
      <Text style={styles.appButtonText}>Log In</Text>
      </LinearGradient>
      </TouchableOpacity>
     
     
    
     <TouchableOpacity 
       onPress={() => this.props.navigation.navigate('Authentification')
       }>
        <LinearGradient
      colors={["#60c640", "#f3f72e"]}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Inregistrare</Text>
      </LinearGradient>
      </TouchableOpacity>
   
    </View> 

    <TouchableOpacity 
       onPress={() => alert("Inregistrare")
       }>
        <LinearGradient
      colors={["#60c640", "#f3f72e"]}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Recupereaza parola</Text>
      </LinearGradient>
      </TouchableOpacity>

  </View>
 </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
   input: {
  width: "100%",
  backgroundColor: "#fff",
  padding: 10,
  marginBottom: 10,
  borderRadius: 20,
  borderWidth: 1,
  },

btnContainer: {
flexDirection: "row",
justifyContent: "space-between",
},
gradient: {
flex: 1,
paddingLeft: 15,
paddingRight: 15,
borderRadius: 5
},
textshadow:{
    fontSize:20,
    color:'#FFFFFF',
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
    marginBottom: 10,
    width: "100%",
   
  },

  appButtonContainer2: {
    elevation: 8,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    marginBottom: 10,
    width: "160%",
   
  },
});

export default HomeScreen;
