import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class NumeP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Carne",
      bodyText: "15.10.2021"
    };
  }

  render() {
    return (
      <Text>
        <Text>
        {this.state.titleText}
        </Text>
         {"\n"}
        <Text>
        {this.state.bodyText}
        </Text>
      </Text>
    );
  }
}


export default NumeP;