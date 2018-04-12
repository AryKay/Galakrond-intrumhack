import React, { Component } from "react";
import { ScrollView, Text, Image, View, StatusBar } from "react-native";
import { Card, Button, Header } from "react-native-elements";
import { Images } from "../Themes";

import BottomTabBar from "../Components/BottomTabBar";

// Styles
import styles from "./Styles/LaunchScreenStyles";

// TODO: create buttons, replace header components with custom ones
export default class AskScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={[styles.mainContainer, { flex: 1, backgroundColor: "#485563" }]}
      >
        <Header
          // leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Ask", style: { color: "#fff" } }}
          // rightComponent={{ icon: "home", color: "#fff" }}
          outerContainerStyles={{ backgroundColor: "#222A33" }}
        />

        <BottomTabBar navigate={navigate}/>
      </View>
    );
  }
}
