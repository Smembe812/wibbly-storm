import React, { ReactNode } from 'react';
// import PropTypes from 'prop-types';
import {
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native';


interface Button {
    children: ReactNode
    onPress(): void
}

export const Button = ({children, onPress} : Button) => {
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