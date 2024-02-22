import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ToDoForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
