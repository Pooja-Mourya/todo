import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Colors } from '../../assets/Colors';

const TodoItem = ({
  item,
  index,
  onOpenMenu,
  onDeleteTodo,
  onUpdateTodo,
  selectedTodoIndex,
  openMenu,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onOpenMenu(index)}
        style={[
          styles.todoItem,
          selectedTodoIndex === index && styles.selectedTodoItem,
        ]}
      >
        <View style={{ width: '90%' }}>
          <Text style={styles.titleText}>Title: {item.title}</Text>
          <Text style={styles.aboutText}>About: {item.about}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => onDeleteTodo(index)}
          >
            <Image
              style={styles.deleteIcon}
              source={require('../../assets/croseicon.png.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {openMenu && selectedTodoIndex === index && (
        <View style={styles.buttonContainer}>
         
          <TouchableOpacity onPress={() => onUpdateTodo(index)} style={styles.actionButton}>
            <Image
              style={styles.iconImage}
              source={require('../../assets/Edit.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedTodoItem: {
    backgroundColor: Colors.primary,
  },
  titleText: {
    fontSize: 25,
    color: Colors.secondary,
  },
  aboutText: {
    color: Colors.secondary,
  },
  deleteIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    marginLeft: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
});

export default TodoItem;
