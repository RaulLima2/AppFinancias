import * as React from 'react';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    title: {
        flex: 'auto',
        height: '100%',
        fontFamily: 'Arial',
        fontSize: 40,
        color: '#139892',
        fontWeight: 'bold',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
    },
    
    logo: {
        flex: 1,
        width: '100%',
        height: 'auto',
        resizeMode: 'cover',
        resizeMethod: 'auto',
        // overflow: 'visible'
    },

    button:{
        flex: 0.3,
        backgroundColor:"#ffffff",
        flexDirection: "row-reverse",
        justifyContent:"flex-start"
    },
});

export default styles;