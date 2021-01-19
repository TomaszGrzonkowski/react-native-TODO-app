import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import TodoModal from "./components/TodoModal";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTodo = (title, description) => {
    setTodos((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), title, description },
      ];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((el) => el.id !== id);
    });
  };

  const handleSetModalVisibility = () => {
    setIsOpen((prevstate) => !prevstate);
  };
  return (
    <View style={styles.container}>
      <TodoModal
        isOpen={isOpen}
        onCloseModal={handleSetModalVisibility}
        handleAdd={handleAddTodo}
      />
      <TodoList todos={todos} onRemoveItem={handleRemoveTodo} />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSetModalVisibility}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    right: 40,
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 30,
  },
});
