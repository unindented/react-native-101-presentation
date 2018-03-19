import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#495361",
    paddingLeft: 10,
    paddingRight: 10
  }
});

const Counter = (props) => <Text style={styles.text}>{props.value}</Text>;

export default Counter;
