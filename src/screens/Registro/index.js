import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Foundation";
import { SelectList } from 'react-native-dropdown-select-list';
import styles from './styles';

function Registro({navigation, props}) {  
  function Spacer(props) {
    return <View style={{height: props.size, width: props.size}} />;
  }

  const axios = require('axios');
  const [categoria, setcategoria] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/HeloiseKatharine/api-controle_de_financias/categoria')

    .then(function (response) {
      setcategoria(response.data)
      console.log("categoria = ")
      console.log(categoria)
      console.log(response.data)
    })
    .catch(function (error) {
      console.log("Erro!")
      console.log(error);
    })
    .then(function (){
    } 
    );
  }, [])

  const [selected, setSelected] = React.useState("");
  
  const data1 = [
      {key: "1", value: "Trabalho"},
      {key: "2", value: "Mercado"},
      {key: "3", value: "Casa"},
      {key: "4", value: "Carro"},
      {key: "5", value: "Netflix"},
      {key: "6", value: "Água"},
      {key: "7", value: "Luz"},
      {key: "8", value: "Internet"},
  ]

  return (
    <View style={{backgroundColor:'#139892',  flex: 1}}>
      <View>
       <View style={{justifyContent: 'space-between', alignContent:"center", flexDirection:'row'}}>
            <Icon.Button
              name="left"
              backgroundColor="transparent"
              color="white"
              size={30}  
              alignContent="center"
              onPress={() => navigation.navigate('Extratos') }
            />

            <Icon2.Button
              name="trash"
              backgroundColor="transparent"
              color="white"
              size={30}  
              alignContent="center"
              onPress={() => navigation.navigate('Excluido') }
            />
        </View>

        <View style={{justifyContent: 'center', alignContent:'center', flexDirection:'column', flex: 1, alignSelf:'center', alignItems: 'center'}}>

          <Text  style={styles.Title}> {"Valor da Algo"} </Text>
          <Text style={styles.Valor}>{"R$ 0,00"}</Text>

        </View>
      </View>
          
        <View style={styles.ViewBox} >

          <View style={{flexDirection:'column', width:"100%"}}>
            <Text style={{ width:"100%"}}>{"Categoria"}</Text>
            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data1} 
                save="value"
              />    
              <View style={{ width:'60px'}}>
                <Pressable style={styles.buttonSalvar}  onPress={() => navigation.navigate('CriarCategoria')}>
                  <Text>{"criar"}</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View style={{alignItems: 'center', width:"100%"}}>
            
            <View style={{width:'100%'}}>
              <Text>{"Data"}</Text>
              <input type='date'/>
              
              {/*<TextInput
                style={styles.ViewBoxTextInput} 
                multiline
                numberOfLines={5}
                maxLength={50}
              />*/}
            </View>

            <Spacer size={16}/> 

            <View style={styles.Descricao}>
              <TextInput
                placeholder="Descrição"
                multiline
                numberOfLines={5}
                maxLength={50}
              />
            </View>
            
            <Spacer size={16}/> 
            
            <Pressable style={styles.button} onPress={() => navigation.navigate('Salvo')}>
              <Text>{"Salvar"}</Text>
            </Pressable>
          </View>
        </View>
    </View>
  );
}

export default Registro;