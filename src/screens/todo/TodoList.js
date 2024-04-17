import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onOpenMenu, onDeleteTodo, onUpdateTodo, selectedTodoIndex, openMenu }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item, index }) => (
        <TodoItem
          item={item}
          index={index}
          onOpenMenu={onOpenMenu}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
          selectedTodoIndex={selectedTodoIndex}
          openMenu={openMenu}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.todoList}
    />
  );
};

const styles = StyleSheet.create({
  todoList: {
    marginTop: 20,
  },
});

export default TodoList;
