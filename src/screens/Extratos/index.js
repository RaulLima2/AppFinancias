import React, { Component ,  useState, useEffect , FlatList} from 'react';
import { Text, Button, View, SectionList } from 'react-native';
import styles from './style';
import List from '../../components/List/index';
import Icon from "react-native-vector-icons/AntDesign";
import axios from 'axios';

const DATA1 = [
  {
    title: 'Terça, 12/10/2022',
    data: [
      {
        name: 'Alimentação',
        value: 5,
      },
      {
        name: 'Transporte',
        value: 30,
      },
      {
        name: 'Mercado',
        value: 50,
      },
    ],
  },
];

const DATA2 = [
  {
    title: 'Segunda, 12/10/2022',
    data: [
      {
        name: 'Combustível',
        value: 5,
      },
      {
        name: 'Transporte',
        value: 30,
      },
      {
        name: 'Mercado',
        value: 50,
      },
      {
        name: 'Mercado',
        value: 50,
      },
    ],
  },
];

// const api = 'https://back-end.josefreitas788.repl.co';

export default function Extratos ({ navigation }) {
  

  const axios = require('axios');

// https://my-json-server.typicode.com/HeloiseKatharine/api-controle_de_financias/
// https://viacep.com.br/ws/73754022/json/



  const [despesa, setDespesa] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/HeloiseKatharine/api-controle_de_financias/despesa')

    .then(function (response) {
      console.log("Olá, mundo!!");
      console.log(response.data);
      setDespesa(response.data)
      console.log(despesa);
    })
    .catch(function (error) {
      console.log("Olá, mundo erroooo !!");
      console.error(error);
    })
    .then(function (){
    } 
    );
    

  }, [])

  // axios.get('https://my-json-server.typicode.com/HeloiseKatharine/api-controle_de_financias/despesa')

  // .then(function (response) {
  //   console.log("Olá, mundo!!");
  //   console.log(response.data);
  //   setDespesa(response.data)
  //   console.log(despesa);
  // })
  // .catch(function (error) {
  //   console.log("Olá, mundo erroooo !!");
  //   console.error(error);
  // })
  // .then(function (){
  // } 
  // );

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

        <Text style={styles.Title}>{'Gastos Totais'}</Text>
        
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
