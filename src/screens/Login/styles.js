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
        width: '90%',
        height: 40,
        padding: 10,
        color: "#616161" , 
        borderBottomWidth: 1, 
        borderColor: "#139892"
    },
    text:{
        color: 'white'
    },
    icon:{
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end"
    }
});

export default styles;