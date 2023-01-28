import { View, Text, TextInput, SectionList } from 'react-native';
import styles from './styles'

function List(props) {
  return (
    <View style={styles.ViewBox}>
     <SectionList 
        sections={props.data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View>
            <View style={styles.ViewItens}>
              <Text>{item.descricao}</Text>
              {console.log("isso é um testeeee " + item.id)}
              <Text style={{fontWeight:'bold'}}>{item.valor}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.TextViewBox}>
            {title}
          </Text>
        )}
      />
    </View>
  );
}

export default List;