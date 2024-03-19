import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./Title";

const Comment = () => {
  return (
    <View style={styles.container}>
      <Title text="¿Qué te gustaría compartir con los demás?"/>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
