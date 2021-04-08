import React from 'react';
// import PropTypes from 'prop-types';
import {
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native';

export const Button = ({children, onPress}) => {
   return (
    <TouchableHighlight onPress={onPress} style={styles.button}>
        {children}
    </TouchableHighlight>
   ) 
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: 10
    }
});

export default Button