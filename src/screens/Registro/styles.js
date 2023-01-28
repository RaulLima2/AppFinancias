import * as React from 'react';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
  ViewBox:{
    backgroundColor:'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height:'100%',
    flexDirection: 'column',
    paddingTop:'45px'
  },
  ViewBoxBetween: {
    flex: 2,
    flexDirection: 'row',
    justfyContent: 'center'
  },
  ViewBoxTextInput: {
    width: '100%'
  },
  button: {
    //borderRadius:10,
    borderWidth: 1,
    borderColor:'#139892',
    backgroundColor: '#00000',
    //height: '50px',
    //width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 100,
    height: 40,
    width: '80%'
  },
  buttonSalvar: {
    borderRadius:10,
    borderWidth: 1,
    borderColor:'#139892',
    backgroundColor: '#00000',
    height: '50px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Title:{
    color: '#ffffff',
    width: "100%",
    fontSize: 16,
    fontFamily: "Arial",
    textAlign: 'center'
  },
  Valor:{
    color: '#ffffff',
    width: "100%",
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  Descricao:{
    height: "100px",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    borderColor:'#139892',
    borderWidth: 1,
  }
});

export default styles;