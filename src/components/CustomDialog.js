import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../assets/Colors";

export const CustomDialog = ({ visible, onClose, onDelete }) => (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.deleteModalView}>
        <View style={[styles.deleteContainer, { borderTopWidth: 3, borderTopColor: Colors.primary }]}>
          <Text style={styles.modalText}>Delete this task?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onDelete} style={[styles.actionButton, styles.updateButton]}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={[styles.actionButton, styles.updateButton]}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 0,
      justifyContent: 'space-between',
      width: '100%',
    },
    todoList: {
      marginTop: 20,
    },
    todoItem: {
      borderWidthTop: 1,
      borderColor: Colors.primary,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    selectedTodoItem: {
      backgroundColor: Colors.primary,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 10,
      width: '100%',
      height: 'auto',
    },
    actionButton: {
      borderColor: Colors.primary,
      borderWidthTop: 1,
      padding: 5,
      borderRadius: 5,
    },
    addButton: {
      borderColor: Colors.primary,
      borderWidth: 2,
      padding: 25,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    plusIcon: {
      fontSize: 24,
      color: Colors.secondary,
    },
    content: {
      color: Colors.secondary,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor:Colors.secondary,
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      color:Colors.secondaryLight,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    deleteButton: {
      backgroundColor: '#FF5733',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    cancelButton: {
      backgroundColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color:Colors.secondaryLight,
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#1F1E1B',
      padding: 20,
      borderRadius: 10,
      width: '100%',
    },
  
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 10,
    },
    updateButton: {
      backgroundColor: '#1B1A17',
      marginLeft: 10,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    cancelButton: {
      backgroundColor: '#d9534f',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    actionButton: {
      borderRadius: 5,
    },
    inputField: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    deleteModalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    deleteContainer: {
      margin: 20,
      backgroundColor: Colors.backGround,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    noTasksContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    border: {
      borderWidth: 2,
      borderColor: Colors.primary,
      width: 100,
      marginBottom: 10,
    },
    noTasksText: {
      color:Colors.secondaryLight,
      marginBottom: 10,
    },
    textArea: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 10, // Adjust vertical padding as needed
      height: 100, // Adjust the height as needed
    },
  });