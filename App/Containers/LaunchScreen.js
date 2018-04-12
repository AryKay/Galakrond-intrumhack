import React, { Component } from "react";
import { ScrollView, Text, Image, View, StatusBar } from "react-native";
import { Card, Button, Header } from "react-native-elements";
import { Images } from "../Themes";
import ItemCard from "../Components/ItemCard";
import CardList from "../Components/CardList";
import ProgressBar from '../Components/ProgressBar'
import FullButton from "../Components/FullButton";
import BottomTabBar from "../Components/BottomTabBar";

// Styles
import styles from "./Styles/LaunchScreenStyles";

// Mock Goal Data
// TODO: Change component in ItemCard
const cards = [
  {
    id: "0",
    title: "Macbook Air",
    picture: require('../Images/macbook.png'),
    content: <View><Text style={{marginBottom: 15}}>Around 1 day left to achieve this goal!</Text>
            <FullButton
          text="Invest Savings"
        /></View>,
    progress: 0.60,
    price: 1000, 
  },
  {
    id: "1",
    title: "Barcelona Trip",
    picture: require('../Images/spain-flag.png'),
    content: <View><Text style={{marginBottom: 15}}>Around 4 days left to achieve this goal!</Text>
            <FullButton
          onPress={() => navigate("LaunchScreen")}
          text="Invest Savings"
        /></View>,
    progress: 0.85,
    price: 1500,
  },
  {
    id: "2",
    title: "Jedi Costume",
    picture: require('../Images/jedi.png'),
    content: <View><Text style={{marginBottom: 15}}>Keep it up and you'll achieve this in no time!</Text>
            <FullButton
          onPress={() => navigate("LaunchScreen")}
          text="Invest Savings"
        /></View>,
    progress: 0.35,
    price: 100,
  } 
]

// TODO: create buttons, replace header components with custom ones
export default class LaunchScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
        <Header
          // leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Goals", style: { color: "#fff" } }}
          // rightComponent={{ icon: "home", color: "#fff" }}
          outerContainerStyles={{ backgroundColor: "#222A33" }}
        />
        <StatusBar barStyle="light-content" hidden={false} />
        <CardList cards={cards} />

        <BottomTabBar navigate={navigate}/>
      </View>
    );
  }
}
