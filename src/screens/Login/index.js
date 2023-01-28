import React from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';
import Icon from "react-native-vector-icons/AntDesign";

function Login({navigation}) {
  function Spacer(props) {
  return <View style={{height: props.size, width: props.size}} />;
}

  return (
    <View style={{flex: 1, width: '100%', backgroundColor: "white"}}>
      <View style={styles.icon}>
        <Icon
          name="user"
          backgroundColor="transparent"
          color="#139892"
          size={90}  
          alignContent="center"
        />
      </View>
      
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>  
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
        />
         <TextInput
          style={styles.inputText}
          placeholder="Senha"
        />
      </View>
      <View style={{justifyContent: 'flex-start', flex: 2, alignItems: 'center'}}>
        <Spacer size={16}/> 
        <Pressable  style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>{"Entrar"}</Text>
        </Pressable>
        
        <Spacer size={16}/> 
        
        <Pressable style={styles.button}  onPress={() => navigation.navigate('CadastroFeito')}> 
            <Text style={styles.text}>{"Cadastrar"}</Text>
        </Pressable>
      </View>    
      
    </View>
  );
}

export default Login;