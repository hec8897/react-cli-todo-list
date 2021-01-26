import React,{Component} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

class TodoList extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.listContainer}>
              <Text>TodoList</Text>
            </ScrollView>
          );
        };
    }

const styles = StyleSheet.create({
    listContainer: {
      alignItems: 'center',
    },
});

export default TodoList;
