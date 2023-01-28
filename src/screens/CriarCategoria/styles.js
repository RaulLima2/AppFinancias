import * as React from 'react';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({

    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#139892",
        borderRadius: 100,
        height: 40,
        width: '80%'
    },
    inputText:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        padding: 10,
        color: "#616161" , 
        borderBottomWidth: 1, 
        borderColor: "#139892",
        width: '80%'
    },
    text:{
        color: 'white'
    },
    icon:{
      //flex: 1,
      alignItems: "flex-end",
      justifyContent: "flex-end"
    },
    container:{
      backgroundColor: "#ffffff",
      // justifyContent: "center",
      //alignItems: "center",
      flex: 1,
      //borderTopLeftRadius: 30,
      //borderTopRightRadius: 30,
    }
});

export default styles;