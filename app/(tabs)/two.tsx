import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TodoListScreen = () => {
  // Sample data (replace with data from local storage later)
  const todos = [
    { id: '1', task: 'Complete Bible discussion board' },
    { id: '2', task: 'Grocery shopping' },
  ];

  const renderItem = ({ item }: { item: { id: string, task: string } }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.task}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Todo List</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333', // Changed to dark background
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  todoItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  todoText: {
    fontSize: 18,
  },
});

export default TodoListScreen;
