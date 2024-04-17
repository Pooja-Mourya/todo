import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import { Colors } from '../../assets/Colors';

const UpdateTodoModal = ({
  visible,
  onClose,
  updatedTitle,
  setUpdatedTitle,
  updatedAbout,
  setUpdatedAbout,
  handleSubmitUpdate,
}) => (
  <Modal
    animationType="slide"
    transparent
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <CustomInput
          placeholder="Updated Title"
          onChangeText={setUpdatedTitle}
          value={updatedTitle}
        />
        <CustomInput
          placeholder="Updated About"
          onChangeText={setUpdatedAbout}
          value={updatedAbout}
          multiline
          numberOfLines={4}
          style={styles.textArea}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleSubmitUpdate(updatedTitle, updatedAbout)}
            style={[styles.actionButton, styles.updateButton]}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onClose}
            style={[styles.actionButton, styles.updateButton]}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.backGround,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  actionButton: {
    borderRadius: 5,
  },
  updateButton: {
    backgroundColor: '#1B1A17',
    borderWidth: 2,
    borderColor: Colors.primary,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default UpdateTodoModal;
