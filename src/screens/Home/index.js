import React, {useEffect} from 'react';
import { FlatList, View, Text, Dimensions, Pressable} from 'react-native';
import { BarChart } from "react-native-chart-kit";
import IconButton from '../../components/IconButton/index';
import Icon from "react-native-vector-icons/AntDesign";
import styles from './styles';

// const api = 'https://back-end.josefreitas788.repl.co';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Luz',
    value: '20%'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Transporte',
    value: '30%'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Mercado',
    value: '50%'
  },
];

const Item = ({title, value}) => (
  <View style={styles.item}>
    <Text style={styles.titleItem}>{title}</Text>
    <Text style={styles.valueItem}>{value}</Text>
  </View>
);

function Home({navigation}) {
  return (
    <View style={{backgroundColor:'#139892',  flex: 1}}>
      <View  style={{padding: '12px', justifyContent: 'center', flexDirection:'row'}}>
          <View style={{justifyContent: 'center'}}> 
            <Icon
              name="caretleft"
              color="white"
              size={14}  
              alignContent="center"
            />
          </View>
          <Text style={styles.titleMonths}>{"Janeiro"}</Text>
          <View style={{justifyContent: 'center'}}> 
            <Icon
              name="caretright"
              color="white"
              size={14}  
              alignContent="center"
            />
          </View>
      </View>

      <View style={styles.ViewBoxHome}>
        <Text style={styles.titleSaldo}>Saldo Atual</Text>
        <Text style={styles.numSaldo}>900,00</Text>

        <Pressable style={styles.ViewBoxHomeExtratos} onPress={() => navigation.navigate('Receitas')}>
            <Text style={styles.textViewBoxHomeExtrato}>{"Receita"}{}</Text>
             <Text style={styles.numExtrato}>100,00</Text>
            <IconButton name="right"
                backgroundColor="transparent"
                color="#ffffff"
                size={14}  
            />
            
        </Pressable>
        <Pressable style={styles.ViewBoxHomeExtratos}  onPress={() => navigation.navigate('Extratos')}>
            <Text style={styles.textViewBoxHomeExtrato}>{"Gastos totais"}</Text>
            <Text style={styles.numExtrato}>89,00</Text>
            <IconButton name="right"
                backgroundColor="transparent"
                color="#ffffff"
                size={14}  
            />
        </Pressable>
        
      </View>

      <View >
          <Text style={styles.title}>{"Gastos Mensais"}</Text>
      </View>

      <View style={{flex: 1, justifyContent:'center'}}>
        <BarChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          }}
          width={Dimensions.get('window').width - 20}
          height={70}
          yAxisLabel={'R$'}
          chartConfig={{
            backgroundGradientFrom: '#139892',
            backgroundGradientTo: '#139892',
            decimalPlaces: 2,
            color: (opacity = 1) => 'white',
            style: {
              // borderRadius: 16,
            },
          }}
          style={{
            // marginVertical: 8,
            fontFamily: 'Arial',
          }}
        />
      </View>
      <View>
      <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} value={item.value}/>}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}




export default Home;