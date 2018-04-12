import React, { Component } from "react";
import { ScrollView, Text, Image, View, StatusBar } from "react-native";
import { Card, Button, Header } from "react-native-elements";
import { Images } from "../Themes";
import ItemCard from "../Components/ItemCard";
import CardList from "../Components/CardList";
import BottomTabBar from "../Components/BottomTabBar";
// Styles
import styles from "./Styles/LaunchScreenStyles";

// Mock Goal Data
// TODO: Change component in ItemCard
const cards = [
  {
    id: "0",
    title: "Macbook Air",
    picture: require("../Images/ir.png"),
    content: <Text>Macbook Air</Text>
  },
  {
    id: "1",
    title: "Barcelona Trip",
    picture: require("../Images/ir.png"),
    content: <Text>Barcelona Trip</Text>
  },
  {
    id: "2",
    title: "Gucci Bag",
    picture: require("../Images/ir.png"),
    content: <Text>Gucci Bag</Text>
  }
];

// TODO: create buttons, replace header components with custom ones
export default class LaunchScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Goals", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
          outerContainerStyles={{ backgroundColor: "#000000" }}
        />
        <Button
          title="Go to morning"
          onPress={() => navigate("MorningScreen", { name: "Jane" })}
        />
        <StatusBar barStyle="light-content" hidden={false} />
        <CardList cards={cards} />

        <BottomTabBar navigate={navigate}/>
      </View>
    );
  }
}
