import React, { useState } from 'react'; // Added useState
import { View, Text, StyleSheet, FlatList } from 'react-native'; // Removed CheckBox
import CheckBox from '@react-native-community/checkbox'; // Ensure this import is correct

const TodoListScreen = () => {
  const [todos, setTodos] = useState([
    { id: '1', task: 'Complete Bible discussion board', checked: false },
    { id: '2', task: 'Grocery shopping', checked: false },
  ]);

  
  const toggleCheckbox = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  };

  const renderItem = ({ item }: { item: { id: string, task: string, checked: boolean } }) => (
    <View style={styles.todoItem}>
      <CheckBox value={item.checked} onValueChange={() => toggleCheckbox(item.id)} /> {/* CheckBox should be defined */}
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

console.log(CheckBox); // Add this line to check if CheckBox is imported correctly
