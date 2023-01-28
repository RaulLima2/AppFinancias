import * as React from 'react';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    title: {
      padding: 24,
      fontFamily: 'Arial',
      fontSize: 40,
      color: '#139892',
      fontWeight: 'bold',
      alignSelf: 'stretch',
      justifyContent: 'flex-end',
    },

    logo: {
      flex: 1,
      resizeMode: 'cover',
      resizeMethod: 'auto',
      overflow: 'visible',
      width: '100%', 
      height: 'auto',
    }
});

export default styles;