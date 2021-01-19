import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemoveItem }) => {
  return (
    <View>
      <Text>Your tasks to do: </Text>
      <Text style={styles.text}>Press the task to remove it.</Text>
      <FlatList
        data={todos}
        renderItem={(data) => (
          <TodoItem item={data.item} onRemoveItem={onRemoveItem} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    marginBottom: 10,
  },
});
