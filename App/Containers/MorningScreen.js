import React, { Component } from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  StatusBar,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";
import { Card, Button, Header } from "react-native-elements";
import { Images } from "../Themes";
import FullButton from "../Components/FullButton";
// import CardList from "../Components/CardList";

// Styles
import styles from "./Styles/MorningScreenStyles";

// Mock Goal Data
const imageToRotate = require("../Images/light-streams-3.png");
const closeIcon = require("../Images/close-icon.png");

// TODO: create buttons, replace header components with custom ones
export default class MorningScreen extends Component {
  state = {
    spinValue: new Animated.Value(0),
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    // First set up animation
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 30000,
      easing: Easing.linear
    }).start();
  }

  render() {
    const { navigate } = this.props.navigation;
    let { fadeAnim } = this.state;

    // Second interpolate beginning and end values (in this case 0 and 1)
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View style={styles.morningContainer}>        
        <TouchableOpacity
          onPress={() => navigate("HomeScreen")}
          style={{ marginTop: 36, marginStart: 10 }}
        >
          <Image source={closeIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>

        {/* <Animated.Image
          style={{ transform: [{ rotate: spin }], marginHorizontal: -320, marginVertical: -180 }}
          source={imageToRotate}
        /> */}

        <ScrollView
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#fff", fontSize: 28 }}>
            Nice! You’ve saved
          </Text>

          <Text style={styles.savingStyle}>45€</Text>
          <Text style={{ color: "#fff", fontSize: 28 }}>from yesterday</Text>
        </ScrollView>

        <FullButton
          onPress={() => navigate("LaunchScreen")}
          text="Invest to Goals"
        />
      </View>
    );
  }
}
