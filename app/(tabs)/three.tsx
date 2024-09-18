import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrackerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress Tracker</Text>
      <Text style={styles.description}>
        Visual representation of your progress will be displayed here.
      </Text>
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
    backgroundColor: '#333', // Changed to dark background
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
});

export default TrackerScreen;
