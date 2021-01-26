import React,{Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>Hello React Native</Text>
        <View style={styles.card}>
          <TodoInsert />
          <TodoList />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  appTitle :{
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 30
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
    marginRight:20

  },
});

export default App;