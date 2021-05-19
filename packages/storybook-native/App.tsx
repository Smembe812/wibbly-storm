import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import StorybookUIRoot from './storybook'
import { Button } from '@wibbly-storm/commons/components/Button';
const App:()=>ReactNode = () => {
  return (
    <View style={styles.container}>
      <Button onPress={()=> console.log("open")}>
        <Text>Open</Text>
      </Button>
      <StatusBar style="auto"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default  App