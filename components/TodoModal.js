import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

const TodoModal = ({ handleAdd, isOpen, onCloseModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleAddItem = () => {
    if (!title) {
      setError(true);
      return;
    }
    handleAdd(title, description);
    handleClean();
  };

  const handleClean = () => {
    setTitle("");
    setDescription("");
    setError(false);
    onCloseModal();
  };

  useEffect(() => {
    if (title) {
      setError(false);
    }
  }, [title]);

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.mainWrapper}>
        <View>
          <Text>Your Task title:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Enter Your todo title"}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          {error && (
            <Text style={styles.errorText}>Enter the title of Your task</Text>
          )}
          <Text>Your description:</Text>
          <TextInput
            style={styles.textarea}
            maxLength={100}
            multiline={true}
            placeholder="Enter description of Your task"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleAddItem}>
            <Text>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleClean}>
            <Text>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TodoModal;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: 200,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 5,
    padding: 10,
  },
  textarea: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  errorText: {
    fontSize: 10,
    color: "red",
    marginBottom: 10,
  },
});
