import React from 'react';
import {
  StyleSheet,  
  View,
  Text,
  
} from 'react-native';
let nt;
let cor;
export default function(props){
    nt =props.nota;
    cor=props.cor;
    return(
        <View>
            <Text style={estilos.txt1,{color:cor}}>Curso de {props.curso} nota={nt}</Text>
            <Text style={estilos.txt2}>Titulo 2</Text>
        </View>
    );
}
const estilos = StyleSheet.create({
    txt1:{
        //color: '#00f',
        fontSize:20,
    },
    txt2:{
        color: '#0f0',
        fontSize:40, 
    }
});