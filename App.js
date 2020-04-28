import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>God Bless You</Text>
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

export default App;