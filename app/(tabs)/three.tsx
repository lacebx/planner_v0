import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrackerScreen = ({ route }: { route: { params: { checkedTodos: Array<{ task: string }> } } }) => { // Added route prop
  const { checkedTodos } = route.params; // Destructure checkedTodos

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress Tracker</Text>
      <Text style={styles.description}>
        Visual representation of your progress will be displayed here.
      </Text>
      <Text style={styles.checkedItemsTitle}>Checked Items:</Text> {/* Added title for checked items */}
      {checkedTodos.map((todo, index) => (
        <Text key={index} style={styles.checkedItem}>{todo.task}</Text> // Display checked items
      ))}
      {/* Placeholder for chart */}
      <View style={styles.chartPlaceholder}>
        <Text style={styles.chartText}>[ Chart Placeholder ]</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333', 
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  chartPlaceholder: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartText: {
    fontSize: 18,
    color: '#aaa',
  },
  checkedItemsTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  checkedItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default TrackerScreen;
