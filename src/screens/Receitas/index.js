import React, { Component ,  useState, useEffect , FlatList} from 'react';
import { Text, Button, View, SectionList } from 'react-native';
import styles from './style';
import List from '../../components/List/index';
import Icon from "react-native-vector-icons/AntDesign";

export default function Extratos ({ navigation }) {
  const axios = require('axios');
  const [despesa, setDespesa] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/HeloiseKatharine/api-controle_de_financias/receita')

    .then(function (response) {
      setDespesa(response.data)
      console.log("despesa = ")
      console.log(despesa)

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function (){
    } 
    );
  }, [])


  const listDespesa = () => {
      console.log("element 1 = ")
      console.log(despesa)
    return despesa.map(element => {
      {console.log("element = ")}
      {console.log(element)}
      return (
        <List data={[element]} />
      );
    });
  };

    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>

        <View>
            <Icon.Button
              name="left"
              backgroundColor="transparent"
              color="#139892"
              size={30}  
              alignContent="center"
              onPress={() => navigation.navigate('Home') }
            />
        </View>

        <Text style={styles.Title}>{'Receita'}</Text>
        
      <View>{listDespesa()}</View>
 

        <View style={{justifyContent: 'center', alignContent:"center", flexDirection:'row'}}>
          <Icon.Button
              name="pluscircle"
              backgroundColor="transparent"
              color="#139892"
              size={30}  
              alignContent="center"
              onPress={() => navigation.navigate('Registro') }
          />
        </View>
      </View>
    );
}

// export default Extratos;
