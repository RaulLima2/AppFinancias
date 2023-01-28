import React from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';
import Icon from "react-native-vector-icons/AntDesign";

function CriarCategoria({navigation}) {  
  function Spacer(props) {
    return <View style={{height: props.size, width: props.size}} />;
}
  return (

    <View style={{flex: 1, width: '100%', backgroundColor: "white" }}>
      <View style={styles.icon}>
        <Icon
          name="close"
          backgroundColor="transparent"
          color="#139892"
          size={40}  
          alignContent="flex-end"
           onPress={() => navigation.navigate('Registro') }
        />
      </View>

      <View style={styles.container}>
        <View style={{justifyContent: 'flex-end', flex: 1, alignItems: 'center'}}>  
          <TextInput
            style={styles.inputText}
            placeholder="Insira um nova categoriaaa"
          />
        </View>
        <Spacer size={16}/> 
        <View style={{justifyContent: 'flex-start', flex: 2, alignItems: 'center'}}>
          <Spacer size={16}/> 
          <Pressable  style={styles.button} onPress={() => alert('Oi')}>
            <Text style={styles.text}>{"Salvar"}</Text>
          </Pressable>
        </View>
      </View>

    </View>
  );
}

export default CriarCategoria;