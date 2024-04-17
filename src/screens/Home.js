import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import CustomHeader from '../components/CustomHeader'; // Adjust import path if necessary
import {Colors} from '../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Home = ({navigation}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load todos from AsyncStorage when the component mounts
    const loadTodos = async () => {
      try {
        const todosString = await AsyncStorage.getItem('todos');
        if (todosString) {
          const loadedTodos = JSON.parse(todosString);
          setTodos(loadedTodos);
        }
      } catch (error) {
        console.error('Error loading todos from AsyncStorage:', error);
      }
    };
    loadTodos();
  }, []);

  const handleBackPress = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  const handleMenuPress = () => {
    // Define what happens when the menu icon is pressed
    console.log('Menu icon pressed');
  };

  const handleDeleteTodo = async index => {
    // Delete a todo item
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    // Save the updated todos list to AsyncStorage
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
    } catch (error) {
      console.error('Error saving todos to AsyncStorage:', error);
    }
  };

  const handleUpdateTodo = index => {
    // Implement your update functionality here
    console.log('Update button pressed for index:', index);
  };

  const handleInviteTodo = index => {
    // Implement your invite functionality here
    navigation.navigate("Register")
    console.log('Invite button pressed for index:', index);
  };

  return (
    <>
      <View style={styles.container}>
        <CustomHeader
          title="Home"
          onPressArrow={handleBackPress}
          onPressMenu={handleMenuPress}
        />
        <FlatList
          data={todos}
          renderItem={
            (renderTodoItem = ({item, index}) => (
              <View style={styles.todoItem}>
                <View style={styles.todoDetails}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.aboutText}>{item.about}</Text>
                </View>
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    onPress={() => handleDeleteTodo(index)}
                    style={styles.iconButton}>
                    <FontAwesome
                      name="trash"
                      size={24}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          }
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <TouchableOpacity
        style={styles.floatButton}
        onPress={handleInviteTodo}>
        <SimpleLineIcons name={"user-follow"} color={'white'} size={20}/>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
  },
  listContainer: {
    paddingBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    marginHorizontal: 15,
  },
  todoDetails: {
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  aboutText: {
    fontSize: 14,
    color: Colors.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    paddingHorizontal: 8,
  },
  floatButton:{
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom:15,
    right: 15,
    top:0,
    height: 70,
    backgroundColor: Colors.secondary,
    borderRadius: 100,
  }
});

export default Home;
