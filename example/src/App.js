import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Counter from "./Counter";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 42 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter value={this.state.value} />
        <Button title="+" onPress={this.increment} />
        <Button title="-" onPress={this.decrement} />
      </View>
    );
  }

  increment() {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      value: prevState.value - 1
    }));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  }
});
