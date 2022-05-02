import React from 'react';
import {
  StyleSheet, 
  View,
  Text 
} from 'react-native';
import C1 from './componentes/comp';
/*import { Component } from 'react/cjs/react.production.min';*/
/*function*/
export default function App1(){
  return(
    <View style={estilos.container}>
      <C1 curso="React Native" nota="7" cor="#ff0"/>
      <C1 curso="C#" nota="8" cor="#000"/>
      <Text style={estilos.txt3}>titulo 3</Text>
        
  
    </View>
  );
};
const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
    txt3:{
      color: '#f00',
      fontSize: 30,
    }
});

/* class
export default class App1 extends Component{
  render(){
    return(
    <View>
      <View>
        <Text>Matheus</Text>
      </View>
      <View>
        <Text>Marazzi</Text>
        <Text>13988328510</Text>
      </View>
    </View>
    );
  }
}*/