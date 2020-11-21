import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ScrollView, SafeAreaView, } from 'react-native';
import Constants from 'expo-constants';
import LogoPrin from '../components/logoPrin';
import NumeP from '../components/numeP';
import {LinearGradient} from 'expo-linear-gradient';
import { Card, } from 'react-native-paper';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Card style={styles.cardPrin}>
      <LogoPrin/>
      </Card>
     
      <View>   
      <ScrollView>
      <Card style={styles.card}>
      <NumeP/>
      </Card>
       <Card style={styles.card}>
      <Text> Produs nou </Text>
      </Card>
       <Card style={styles.card}>
      <Text> Produs nou </Text>
      <Text> </Text>
      </Card>
      <Card style={styles.card}>
      <Text> Produs nou </Text>
      <Text> </Text>
      </Card>
      
      <TouchableOpacity
      onPress = { () => alert('Adaugare aliment nou')}>
      <LinearGradient
      colors={["#60c640", "#f3f72e"]}
      style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Adauga Produs</Text>
      </LinearGradient>
      </TouchableOpacity>
      </ScrollView>
      </View>
     
 

    </View>
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    padding: 8,
  },
 
  cardPrin: {
    position: 'absolute',
    width: 574,
    height: 146,
    left: -70,
    top: -40,
    backgroundColor: '#34a8eb',
  },
  userBtn: {
    textAlign:'center', 
    backgroundColor: "#FFD700",
    width: '45%',
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    
},
card: {
  backgroundColor:"#74e94f",
  padding: 10,
  marginBottom: 10,
  height: 80,
  borderRadius: 20,
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
   
  },
});

