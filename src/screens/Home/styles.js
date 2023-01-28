import * as React from 'react';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
  ViewBoxHome: {
      width: '100%',
      height: '50%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#ffffff',
      padding: '12px',
    },
  titleSaldo: {
      width: '100%',
      height: 'auto',
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#363333',
    },
  numSaldo: {
      marginBottom:'10px',
      marginTop:'10px',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      fontWeight: 'bold',
      fontFamily: 'Arial',
      fontSize: 24,
      color: '#363333',
    },
  numExtrato: {
      justifyContent: 'center',
      textAlign: 'right',
      alignItems: 'center',
      width: '100%',
      fontWeight: 'bold',
      color: '#ffffff',
      fontSize: 14,
      fontFamily: "Arial",
      paddingRight: 10,
  },
  title: {
    // backgroundColor: 'red',
    flex: 'auto',
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop:'12px',
    marginBottom:'12px',
  },
  titleMonths: {
    // backgroundColor: 'red',
    flex: 'auto',
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop:'12px',
    marginBottom:'12px',
    width: '50%'
  },
  ViewBoxHomeExtratos: {
    padding: '12px',
    flex: 1,
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#139892',
    borderRadius:10,
    marginBottom: '5%'
  },
  textViewBoxHomeExtrato: {
    color: '#ffffff',
    width: "100%",
    fontSize: 14,
    fontFamily: "Arial",
  },
  button:{
    flex: 0.3,
    backgroundColor:"transparent",
    flexDirection: "row-reverse",
    justifyContent:"flex-start"
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: "#fff",
    borderBottomWidth: 2
  },
  titleItem: {
    fontSize: 12,
    color: "#FFFF",
    borderLeftColor: "#00ff20",
    borderLeftWidth: 12
  },
  valueItem: {
    fontSize: 12,
    color: "#FFFF",
  }
});

export default styles;