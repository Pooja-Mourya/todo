import React, { useState } from 'react';
import { View, Alert, StyleSheet , Text} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import {CustomDialog} from '../components/CustomDialog';
import TodoForm from './todo/TodoForm';
import UpdateTodoModal from './todo/UpdateTodoModal';
import { Colors } from '../assets/Colors';
import TodoList from './todo/TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Todos = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogVisibleUpdate, setDialogVisibleUpdate] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedAbout, setUpdatedAbout] = useState('');

  // Handle creating a new todo
  // const handleCreateTodo = () => {
  //   if (title && about) {
  //     const newTodo = { title, about };
  //     setTodos([...todos, newTodo]);
  //     setTitle('');
  //     setAbout('');
  //   } else {
  //     Alert.alert('Please fill in both title and about fields.');
  //   }
  // };

  const handleCreateTodo = async () => {
    if (title && about) {
        const newTodo = { title, about };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);

        // Store updated list of todos in AsyncStorage
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));

        } catch (error) {
            console.error('Error saving todos to AsyncStorage:', error);
        }

        // Clear input fields after creating a new todo
        setTitle('');
        setAbout('');
    } else {
        Alert.alert('Please fill in both title and about fields.');
    }
};

  // Handle deleting a todo
  const handleDeleteTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos.splice(deleteIndex, 1);
    setTodos(updatedTodos);
    setDialogVisible(false);
  };

  // Handle updating a todo
  const handleSubmitUpdate = (updatedTitle, updatedAbout) => {
    const updatedTodos = [...todos];
    updatedTodos[selectedTodoIndex] = { title: updatedTitle, about: updatedAbout };
    setTodos(updatedTodos);
    setDialogVisibleUpdate(false);
  };

  return (
    <>
      <CustomHeader title="My Todo App" onPressArrow={navigation.goBack} />
      <View style={styles.container}>
        {/* Todo Form */}
        
        <TodoForm
          title={title}
          setTitle={setTitle}
          about={about}
          setAbout={setAbout}
          handleCreateTodo={handleCreateTodo}
        />

        {/* Todo List */}
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            onOpenMenu={(index) => {
              setSelectedTodoIndex(index);
              setOpenMenu(!openMenu);
            }}
            onDeleteTodo={(index) => {
              setDeleteIndex(index);
              setDialogVisible(true);
            }}
            onUpdateTodo={(index) => {
              setSelectedTodoIndex(index);
              setOpenMenu(false);
              setUpdatedTitle(todos[index].title);
              setUpdatedAbout(todos[index].about);
              setDialogVisibleUpdate(true);
            }}
            selectedTodoIndex={selectedTodoIndex}
            openMenu={openMenu}
          />
        ) : (
          <View style={styles.noTasksContainer}>
            <Text style={styles.noTasksText}>No tasks</Text>
          </View>
        )}

        {/* Custom Dialog for Delete Confirmation */}
        <CustomDialog
          visible={dialogVisible}
          onClose={() => setDialogVisible(false)}
          onDelete={handleDeleteTodo}
        />

        {/* Update Todo Modal */}
        <UpdateTodoModal
          visible={dialogVisibleUpdate}
          onClose={() => setDialogVisibleUpdate(false)}
          updatedTitle={updatedTitle}
          setUpdatedTitle={setUpdatedTitle}
          updatedAbout={updatedAbout}
          setUpdatedAbout={setUpdatedAbout}
          handleSubmitUpdate={handleSubmitUpdate}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // flexDirection:'row',
    // width:'100%',

    backgroundColor:Colors.backGround,
  },
  noTasksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTasksText: {
    color: Colors.secondaryLight,
    marginBottom: 10,
  },
});

export default Todos;
