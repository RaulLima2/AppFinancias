import React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles'
import Icon from "react-native-vector-icons/AntDesign";
import { Link } from 'react-router-dom';
// import { NavigationContainer } from '@react-navigation/native';


function Welcome({navigation}) {
    return (
      <View style={{flex: 1, width: '100%', backgroundColor: "white"}}>
        
        <View style={{flex: 1, width: '80%',  height: 'auto'}}>
          <Text style={styles.title}>Transforme sua vida financeira</Text>
        </View>

        <View style={{flex: 'auto'}}>
          <Image 
            source={ require('../../images/welcome.jpg') } 
            style={styles.logo}
          />
        </View>

        <View style={styles.button}>
          <Icon.Button
            name="right"
            backgroundColor="#ffffff"
            color="#139892"
            size={30}  
            alignContent="center"
            onPress={() => navigation.navigate('Login') }
          />
        </View>
      </View>
    );
  }


export default Welcome;