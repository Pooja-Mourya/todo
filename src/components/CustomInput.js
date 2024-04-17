import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Colors } from '../assets/Colors';

const CustomInput = ({ placeholder, onChangeText, value, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.focused]}>
      {/* <Text style={styles.label}>{label}</Text> */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#F0E3CA" 
        value={value}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: "100%", // Ensure the container takes up full width
    color: Colors.primaryLight, // Background color
  },
  focused: {
    borderColor: Colors.secondaryLight,
    color: Colors.primaryLight,
  },
  input: {
    fontSize: 16,
    color: Colors.primary,
    width: 250, // Ensure the input takes up full width
  },
});

export default CustomInput;
