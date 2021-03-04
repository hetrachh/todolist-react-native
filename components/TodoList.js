import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput
} from "react-native";

import Todo from "./Todo";

const TodoList = () => {
  const [title, setTitle] = useState("Todo List");
  const [text, setText] = useState();
  const [list, setList] = useState(["Hello World"]);

  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText('');
  };

  const deleteItem = (index) => {
      const updatedList = list.filter((todo) => todo !== index);
      setList(updatedList)
  }
  return (
    <View style={{ width: "80%", marginBottom: 60 }}>
      <Text style={[style.align, style.font]}>{title}</Text>
      <ScrollView>
        {list.map((x, index) => 
          <Todo key={index} item={x} index={index}  delete={deleteItem}/>
        )}
      </ScrollView>
      <View>
        <TextInput
          style={style.input}
          value={text}
          onChangeText={(text) => setText(text)}
        ></TextInput>
        <Button title="Add" onPress={addItem} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  align: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});

export default TodoList;
