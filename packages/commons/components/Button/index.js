import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native';

const Button = ({children, onPress}) => {
   return (
    <TouchableHighlight onPress={onPress} style={styles.button}>
        {children}
    </TouchableHighlight>
   ) 
}

Button.defaultProps = {
    children: null,
    onPress: () => {},
  };
  
  Button.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
  };

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: 10
    }
});

export default Button