import React, { useEffect } from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles'


function Salvo({navigation}) {
    useEffect(() => {
      setTimeout(() => { navigation.goBack(); }, 1000);
    });
    return (
      <View style={{flex: 1, width: '100%', backgroundColor: "white"}}>
          <View style={{flex: 1, width: '80%',  height: 'auto'}}>
            <Text style={styles.title}>{"Salvo com sucesso!!"}</Text>
          </View>

          <View style={{flex: 'auto'}}>
            <Image 
              source={ require('../../images/image1.png') } 
              style={styles.logo}
            />
          </View>
        </View>
    );
  }

export default Salvo;