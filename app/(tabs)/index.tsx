import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InputScreen = () => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    // Handle the submission logic (e.g., save to local storage)
    console.log(inputText);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's going on?</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your plans here..."
        value={inputText}
        onChangeText={setInputText}
        multiline
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#333', // Changed to dark background
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default InputScreen;
