import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  Selector,
  firstChild,
  notFirstChild,
  lastChild,
  notLastChild,
  even,
  odd,
  select
} from 'react-native-flex-layout';

const styles =  StyleSheet.create({
    ViewBox:{
      // backgroundColor:'pink',
      borderColor:'transparent',
      borderRadius: 10,
      borderWidth: 1,
      shadowColor: '#171717',
      shadowOpacity: 0.25,
      elevation: 4,
      margin: 10,
      shadowRadius: 3,
      padding: "15px",
    },
    ViewItens:{
      borderBottomColor: "#333333",
      borderBottomWidth: "1px",
      justifyContent: 'space-between',
      flexDirection:'row',
      padding: "5px",
      paddingRight: "10px",
      paddingLeft: "10px",
      // borderTopWidth: "0px",
      // borderLeftWidth: "0px",
      // borderRightWidth: "0px",
      // shadowColor: '#171717',
      // shadowOffset: {width: -2, height: 4},
      // shadowOpacity: 0.2,
      // shadowRadius: 3
    
    },
    'ViewItens:lastChild': {
        backgroundColor:'pink',
  },
    TextViewBox: {
      backgroundColor:'white',
      color: '#454242',
      fontFamily: "Helvetica Neue",
      fontSize: 12, 
      marginBottom: 10,
      fontWeight:'bold'
      // textAlign: 'left',
      // letterSpacing: 0,
      // lineHeight: 1
    }
});

export default styles;