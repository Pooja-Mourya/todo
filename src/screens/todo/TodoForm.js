import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { Colors } from '../../assets/Colors';

const TodoForm = ({ title, setTitle, about, setAbout, handleCreateTodo }) => (
  <View style={styles.formContainer}>
    <ScrollView>
      <CustomInput
      placeholder="Title"
      onChangeText={setTitle}
      value={title}
    />
    <CustomInput
      placeholder="About"
      onChangeText={setAbout}
      value={about}
    />
    <TouchableOpacity onPress={handleCreateTodo} style={styles.addButton}>
     <Text style={styles.addText}>Add Todos</Text>
    </TouchableOpacity>   
    </ScrollView>
   
  </View>
);

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'columan',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  addButton: {
    borderColor: Colors.primary,
    borderWidth: 2,
    padding: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  addText: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
},
});

export default TodoForm;
