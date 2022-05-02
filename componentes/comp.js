import React from 'react';
import {
  StyleSheet,  
  View,
  Text,
  
} from 'react-native';
import Estilos from '../estilos/style.js';
let nt;
export default function(props){
    nt =props.nota;
    return(
        <View>
            <Text style={Estilos.textoCursos}>Curso de {props.curso} nota={nt}</Text>
            <Text style={Estilos.textTitulos}>Titulo 2</Text>
        </View>
    );
}
/*const estilos = StyleSheet.create({
    txt1:{
        //color: '#00f',
        fontSize:20,
    },
    txt2:{
        color: '#0f0',
        fontSize:40, 
    }
});*/