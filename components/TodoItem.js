import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ item, onRemoveItem }) => {
  return (
    <TouchableOpacity onPress={() => onRemoveItem(item.id)}>
      <View style={styles.wrapper}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text>
          {item.description ? item.description : "No description for this task"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    padding: 15,
    width: "95%",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
