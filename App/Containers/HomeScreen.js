import React, { Component } from "react";
import { ScrollView, Text, Image, View, StatusBar } from "react-native";
import { Card, Button, Header } from "react-native-elements";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

// TODO: create buttons, replace header components with custom ones
export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={[styles.mainContainer, { flex: 1, backgroundColor: "#485563" }]}
      >
        <Header
          // leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Daily Budget", style: { color: "#fff" } }}
          // rightComponent={{ icon: "home", color: "#fff" }}
          outerContainerStyles={{ backgroundColor: "#222A33" }}
        />
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#fff", fontSize: 72 }}>55.5€</Text>
          <Text style={{ color: "#B2B4B7", fontSize: 18 }}>OUT OF 100€</Text>
        </ScrollView>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <View>
            <Text style={{ color: "#2CC197", fontSize: 28 }}>2,540€</Text>
            <Text style={{ color: "#B2B4B7", fontSize: 16 }}>BALANCE</Text>
          </View>

          <View>
            <Text style={{ color: "#FF638F", fontSize: 28 }}>350€</Text>
            <Text style={{ color: "#B2B4B7", fontSize: 16 }}>
              INVESTMENTS
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
