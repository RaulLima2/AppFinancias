import React , { useEffect }  from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles'


function Excluido({navigation}) {

   useEffect(() => {
    setTimeout(() => { navigation.goBack(); }, 1000);
  });
  
    return (
      <View style={{ flex: 1, width: '100%', backgroundColor: "white"}}>
          <View style={{ flex: 1}}>
            <Text style={styles.title}>{"Excluído com sucesso!!"}</Text>
          </View>

          <View style={{flex: 2, height:"100%"}}>
            <Image 
              source={ require('../../images/image1.png') } 
                style={styles.logo}
            />
          </View>
        </View>
    );
  }

export default Excluido;